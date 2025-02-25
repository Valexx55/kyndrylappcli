import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alumno } from '../../model/alumno';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  imports: [FormsModule],//necesario para el two way binding
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit, OnDestroy {

  alumno:Alumno;

  constructor()
 {
  console.log("En el constructor DEMO");
  this.alumno = new Alumno();
  this.alumno.id = 1;
  this.alumno.nombre = 'PEPE';
  this.alumno.edad = 27;
  this.alumno.apellido = 'MARTÍNEZ';

 }
  ngOnDestroy(): void {
    console.log("En el ngOnDestroy DEMO");
  }
  ngOnInit(): void {
    console.log("En el ngOnInit DEMO");
  }
 
  sumarEdad():void{

    console.log("sumar edad");
    this.alumno.edad = this.alumno.edad + 1;
  }

  iniciarEdad():void{

    console.log("sumar edad");
    this.alumno.edad = 0;
  }
 
  estiloBotonPrimario ():string{
    return "btn btn-primary";

  } 

}
