import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Alumno } from '../../model/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-alumno',
  imports: [FormsModule],
  templateUrl: './formulario-alumno.component.html',
  styleUrl: './formulario-alumno.component.css'
})
export class FormularioAlumnoComponent {


  alumno!:Alumno;

  //forma alternativa al constructor moderna de inyectar dependencias
  alumnoService:AlumnoService =inject(AlumnoService);
  router:Router =inject(Router);

  constructor()
 {
  this.alumno = new Alumno();
 } 

  crearAlumno(){
    console.log("Enviar alumno al POST");
    this.alumnoService.insertarAlumno(this.alumno).subscribe(
     {
      complete: () => console.log("comunicación completada"), 
      error: (error) => console.error(error) , 
      next: (alumno) =>{
        alert("Alumno Insertado Correctamente");
        //Navegar programáticamente al componente listado
        this.router.navigateByUrl('/listadoAlumnos');
        //TODO: put
      } 
     } 
    )
  } 
}