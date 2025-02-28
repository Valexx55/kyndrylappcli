import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Alumno } from '../../model/alumno';
import { AlumnoService } from '../../services/alumno.service';
import { error } from 'console';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario-alumno',
  imports: [FormsModule, NgIf],
  templateUrl: './formulario-alumno.component.html',
  styleUrl: './formulario-alumno.component.css'
})
export class FormularioAlumnoComponent implements OnInit {


  alumno!:Alumno;

  //forma alternativa al constructor moderna de inyectar dependencias
  alumnoService:AlumnoService =inject(AlumnoService);
  router:Router =inject(Router);
  ruta:ActivatedRoute = inject(ActivatedRoute)
  @Input() idAlumno!:string;
  en_edicion:boolean = false;

  constructor()
 {
  this.alumno = new Alumno();
 } 
  ngOnInit(): void {
    let url = window.location.href;
    console.log(`url ${url} idAlumno ${this.idAlumno} `);
    if (this.idAlumno) //si está definido, tiene valor
    {
      this.en_edicion = true;
      //TODO: cargar los datos del alumno identificado
      //por ese ID
      //1) GET POR ID AL SERVIDOR
      //2) Compartir información entre componentes
        //2.1 Vía localStorage Serializando el objecto alumno
        let alumnoedJson = sessionStorage.getItem ("alumnoed")
        if (alumnoedJson)
        {
          this.alumno = JSON.parse(alumnoedJson);
          sessionStorage.clear();
        } 
        
        //2.2 Vía servicio
        //this.alumno =  this.alumnoService.getAlumnoEnEdicion();
    } 
    
    console.log(`En edicion ${this.en_edicion}  `);


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
        
      } 
     } 
    )
  }
  
  editarAlumno ()
 {
  console.log('a editar alumno PUT');
  //casting de string a numbero numero=+string
  this.alumnoService.actualizarAlumno(this.alumno, +this.idAlumno).subscribe
  (
    {
      complete: () => console.log("comunicación completada"), 
      error: (error) => console.error(error) , 
      next: (alumno) =>{
        alert("Alumno Modificado Correctamente");
        //Navegar programáticamente al componente listado
        this.router.navigateByUrl('/listadoAlumnos');
        
      } 
     } 
  )

 } 

 estiloBoton ():string
{
  let estilo:string;

  if (this.en_edicion)
  {
    estilo = 'btn btn-success'
  } else{
    estilo = 'btn btn-primary'
  } 

  return estilo;
} 
}