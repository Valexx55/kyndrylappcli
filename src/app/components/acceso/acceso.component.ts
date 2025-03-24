import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Credenciales } from '../../model/credenciales';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-acceso',
  imports: [FormsModule, RouterLink],
  templateUrl: './acceso.component.html',
  styleUrl: './acceso.component.css'
})
export class AccesoComponent {

  authenticationService: AuthService = inject(AuthService)

  nombreUsuario!: string;
  password!: string;
  tokenService: TokenService = inject(TokenService)
  router:Router = inject(Router)

  onLogin(): void {

    let credenciales = new Credenciales();
    credenciales.password = this.password;
    credenciales.user = this.nombreUsuario;

    this.authenticationService.login(credenciales).subscribe(
      {
        complete: () => console.log('com completada'),
        error: (error) => {
          console.error(`Error al autenticarse ${error}`)
        },
        next: (resp) => {
          console.log(`status = ${resp.status}`);
          let clavesh = resp.headers.keys()
          clavesh.forEach(clave => {
            console.log(`clave ${clave} = valor ${resp.headers.get(clave)} `);
            
          })
          let token =  resp.headers.get("Authorization")??'';
          console.log(`token =  ${token}`);
          this.tokenService.setToken(token)
          this.router.navigateByUrl('/listadoAlumnos')

        }
      }
    )
    /*this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/']);
      },
      err => {
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );*/
  }

}
