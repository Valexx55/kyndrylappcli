import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',//etiqueta padre
  imports: [RouterOutlet],
  templateUrl: './app.component.html',//conteido estructura
  styleUrl: './app.component.css'//estilo formato
})
export class AppComponent {
  //funcionalidad - dinámica "JavaScritp"
  title:string = 'kyndrylappcli';
}
