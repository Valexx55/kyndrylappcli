import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',//etiqueta padre
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',//conteido estructura
  styleUrl: './app.component.css'//estilo formato
})
export class AppComponent implements OnInit{
  //funcionalidad - dinámica "JavaScritp"
  title:string = 'Kyndryl App';

  constructor ()
 {
  console.log("En el constructor AppComponent");
 } 
  ngOnInit(): void {
    console.log("En OnInit");;
  }
}
