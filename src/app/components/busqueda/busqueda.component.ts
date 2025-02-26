import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  imports: [FormsModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  edadMin!:number;
  edadMax!:number;

  consultarAlumnosRango ()
 {
  console.log(`En consultarAlumnosRango ${this.edadMin} y ${this.edadMax} `);
 } 


}
