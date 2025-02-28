import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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
  
  cabeceras:HttpHeaders = new HttpHeaders({'content-type':'application/json'})

  alumnoEnEdicion!:Alumno;

  //http://localhost:4200/listadoAlumnos
  //dispongo de un objeto HttpClient por inyección de depdencias,
  //declarando el atributo en la cabecera del constructor
  //Autowired en Spring
  constructor(private httpClient : HttpClient) { 
    
  }

  setAlumnoEnEdicion (alumno:Alumno)
  {
       this.alumnoEnEdicion = alumno;
  } 

  getAlumnoEnEdicion ():Alumno
  {
       return this.alumnoEnEdicion;
  } 

  //automáticamente, pasade JSON a objecto de JavaScript
  listadoAlumnos():Observable<Array<Alumno>> //recuperamos los alumnos del servidor
 {
        return this.httpClient.get<Array<Alumno>>("http://localhost:9090/api/alumnos");
        
 } 

 rangoAlumnosEdad(edadmin:number, edadmax:number):Observable<Array<Alumno>> //recuperamos los alumnos del servidor
 {
        return this.httpClient.get<Array<Alumno>>("http://localhost:9090/api/alumnos/consultar-alumnos-rango-edad?edadmin="+edadmin+"&edadmax="+edadmax);
        
 }

 rangoAlumnosEdadAccesoACabeceras(edadmin:number, edadmax:number):Observable<HttpResponse<Array<Alumno>>> //recuperamos los alumnos del servidor
 {
        return this.httpClient.get<Array<Alumno>>("http://localhost:9090/api/alumnos/consultar-alumnos-rango-edad?edadmin="+edadmin+"&edadmax="+edadmax,{observe:'response'} );
        
 }


 borrarAlumno(id:number):Observable<void> //recuperamos los alumnos del servidor
 {
        return this.httpClient.delete<void>("http://localhost:9090/api/alumnos/"+id);
        
 } 

   //automáticamente, pasade JSON a objecto de JavaScript
   insertarAlumno(alumno:Alumno):Observable<Alumno> //recuperamos los alumnos del servidor
   {
          return this.httpClient.post<Alumno>("http://localhost:9090/api/alumnos", alumno,{headers:this.cabeceras} );
          
   } 

   actualizarAlumno(alumno:Alumno, id:number):Observable<Alumno> //recuperamos los alumnos del servidor
   {
          return this.httpClient.put <Alumno>("http://localhost:9090/api/alumnos/"+id, alumno,{headers:this.cabeceras});
          
   } 

}

