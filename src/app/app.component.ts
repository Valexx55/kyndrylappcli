import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TokenService } from './services/token.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',//etiqueta padre
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',//conteido estructura
  styleUrl: './app.component.css'//estilo formato
})
export class AppComponent implements OnInit{
  //funcionalidad - dinámica "JavaScritp"
  title:string = 'Kyndryl App';

  constructor (private tokenService:TokenService)
 {
  console.log("En el constructor AppComponent");
 } 
  ngOnInit(): void {
    console.log("En OnInit");

    
  }

  estaLogueado ():Boolean
  {
    return this.tokenService.isLogged();
  }

  logout ()
  {
    this.tokenService.logOut();
  }

}
