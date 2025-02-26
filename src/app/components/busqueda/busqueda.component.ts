import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../model/alumno';
import { Observer } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-busqueda',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  edadMin!:number;
  edadMax!:number;

 listaAlumnos!: Array<Alumno>;
 
   observerListaAlumnos: Observer<Array<Alumno>>
 
   constructor(private alumnoService: AlumnoService) {
     //this.listaAlumnos = new Array<Alumno>();
     this.observerListaAlumnos = 
     {
       complete: () => { console.log('Comunicación terminada'); },
       next: (listaAlumnosRx: Array<Alumno>) => {
         console.log('Comunicación terminada OK 200');
         this.listaAlumnos = listaAlumnosRx;
         this.listaAlumnos.forEach(alumno => {
           console.log(`ID = ${alumno.id} Nombre = ${alumno.nombre} Edad = ${alumno.edad}  `);
         } )
         
       },
       error: (error: any) => {
         console.error('Ha habido un error en la comunicación ' + error);
         window.alert("Error obteniendo el listado")
       }
     }
    }  

  consultarAlumnosRango ()
 {
  console.log(`En consultarAlumnosRango ${this.edadMin} y ${this.edadMax} `);
  this.alumnoService.rangoAlumnosEdad(this.edadMin, this.edadMax).subscribe(this.observerListaAlumnos);

 } 


 ordenarPorId()
{
 console.log("ordenar por id");
 this.listaAlumnos.sort((alumno1, alumno2)=> 
 { 
  return alumno1.id-alumno2.id;

 })
} 


ordenarPorNombre()
{
  console.log("ordenar por nombre");
  this.listaAlumnos.sort((alumno1, alumno2)=> 
    { 
      let valorDevuelto = 0;
      if (alumno1.nombre > alumno2.nombre) 
        valorDevuelto = 1;
      else if (alumno1.nombre < alumno2.nombre) 
               valorDevuelto = -1
     return valorDevuelto;
   
    })
} 


ordenarPorEdad()
{
  console.log("ordenar por edad");
  this.listaAlumnos.sort((alumno1, alumno2)=> 
    { 
     return alumno1.edad-alumno2.edad;
   
    })
} 


}
