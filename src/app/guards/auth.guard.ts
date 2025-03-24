import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('EN la guarda');
  let tokenService = inject(TokenService)
  let res = tokenService.isLogged()
  //alert(`Puedes? ${res}`)
  return res;
  
};
