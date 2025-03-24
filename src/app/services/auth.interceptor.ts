import { HttpInterceptorFn, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from './token.service';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let tokenService = inject(TokenService)
  
  console.log('hola soy el interceptor');
  if (tokenService.isLogged())
  {
    const token = tokenService.getToken() ?? '';
    //let cabecerasAuth:HttpHeaders = new HttpHeaders({'Authorization':token})
    let nreq = req.clone({ headers: req.headers.append('Authorization', token)})
    console.log('Logueado, le dejo pasar');
    return next(nreq);
  } else {
    //si no está logueado, tal vez acce
    return next(req);
  }

  //let intReq = req;
  
  
  
};


