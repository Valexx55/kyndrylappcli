import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Alumno } from '../../model/alumno';

@Component({
  selector: 'app-formulario-alumno',
  imports: [FormsModule],
  templateUrl: './formulario-alumno.component.html',
  styleUrl: './formulario-alumno.component.css'
})
export class FormularioAlumnoComponent {


  alumno!:Alumno;

  crearAlumno(){

  } 
}
