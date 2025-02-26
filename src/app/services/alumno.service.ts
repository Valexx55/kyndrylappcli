import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../model/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  /**
   * ESTE CLASE ENCAPSULA LA COMUNICACIÓN HTTP
   * CON EL SERVIDOR
   * 
   * httpclient
   * observables rx/js
   * interceptores
   * 
   */
  

  //dispongo de un objeto HttpClient por inyección de depdencias,
  //declarando el atributo en la cabecera del constructor
  //Autowired en Spring
  constructor(private httpClient : HttpClient) { 
    
  }

  //automáticamente, pasade JSON a objecto de JavaScript
  listadoAlumnos():Observable<Array<Alumno>> //recuperamos los alumnos del servidor
 {
    return this.httpClient.get<Array<Alumno>>("http://localhost:9090/api/alumnos")
 } 
}
