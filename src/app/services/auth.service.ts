import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Credenciales } from '../model/credenciales';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

cabeceras:HttpHeaders = new HttpHeaders({'content-type':'application/json'})

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>("http://localhost:9090/api/alumnos/nuevo" + 'nuevo', nuevoUsuario, {observe:'response'});
  }

  public login(loginUsuario: Credenciales): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>('http://localhost:9090/api/alumnos/login', loginUsuario, {headers:this.cabeceras, observe:'response'});
  }

  /*
  public refresh(dto: JwtDTO): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'refresh', dto);
  }*/
}
