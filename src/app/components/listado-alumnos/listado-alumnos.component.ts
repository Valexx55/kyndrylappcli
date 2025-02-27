import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../model/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { Observer } from 'rxjs';
import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado-alumnos',
  imports: [NgFor, NgIf, UpperCasePipe, DatePipe, RouterLink], //necesario importar explícitamente estas directivas
  templateUrl: './listado-alumnos.component.html',
  styleUrl: './listado-alumnos.component.css'
})
export class ListadoAlumnosComponent implements OnInit {

  listaAlumnos: Array<Alumno>;

  //TODO: incluir el consumo de DELETE, POST, PUT
  observerListaAlumnos: Observer<Array<Alumno>>

  //inject(AlumnoService)

  constructor(private alumnoService: AlumnoService) {
    this.listaAlumnos = new Array<Alumno>();
    this.observerListaAlumnos = 
    {
      complete: () => { console.log('Comunicación terminada'); },
      next: (listaAlumnosRx: Array<Alumno>) => {
        console.log('Comunicación terminada OK 200');
        this.listaAlumnos = listaAlumnosRx;
        this.listaAlumnos.forEach(alumno => {
          console.log(`ID = ${alumno.id} Nombre = ${alumno.nombre} `);
        } )
        
      },
      error: (error: any) => {
        console.error('Ha habido un error en la comunicación ' + error);
        window.alert("Error obteniendo el listado")
      }
    }

  }
  ngOnInit(): void {
    //TODO: traer el listado de alumnos del servidor
    this.alumnoService.listadoAlumnos().subscribe(this.observerListaAlumnos);
    /*this.alumnoService.listadoAlumnos().subscribe(
      {
        complete: () => { console.log('Comunicación terminada'); },
        next: (listaAlumnosRx: Array<Alumno>) => {
          console.log('Comunicación terminada');
        },
        error: (error: any) => {
          console.error('Ha habido un error en la comunicación ' + error);
          window.alert("Error obteniendo el listado")
        }
      }
    )*/
  }

  editarAlumno(idAlumno:number)
 {
  console.log("en editarAlumno " + idAlumno);
 } 

 borrarAlumno(idAlumno:number)
{
  console.log("en borrarAlumno " + idAlumno);
  this.alumnoService.borrarAlumno(idAlumno).subscribe(
   {
    complete: () => { console.log('Comunicación terminada'); },
      next: () => {
        console.log('Registro borrado OK'); 
        //TODO: borrar alumno de la lista
        this.listaAlumnos = this.listaAlumnos.filter((alumno)=>{
          let sequeda:boolean = false;

            if (alumno.id!=idAlumno)
            {
              sequeda = true;
            } 

          return sequeda;
        } )


      },
      error: (error: any) => {
        console.error('Ha habido un error en la comunicación ' + error);
        window.alert("Error obteniendo el listado")
      }
   } 
  )
} 

}
