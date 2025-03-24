import { Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AccesoComponent } from './components/acceso/acceso.component';
import { inject } from '@angular/core';
import { authGuard } from './guards/auth.guard';

//este array sirve para asociar
//ruta y componente

export const routes: Routes = [
   {path:'demoalumno', component: DemoComponent},
   {path:'listadoAlumnos', component: ListadoAlumnosComponent, canActivate:[authGuard]} ,
   {path:'busquedaAlumno', component: BusquedaComponent, canActivate:[authGuard]},
  {path:'formulario', component:FormularioAlumnoComponent,canActivate:[authGuard]},
  {path:'formulario/edit/:idAlumno', component:FormularioAlumnoComponent
    ,canActivate:[authGuard]
  },
  {path: 'signup', component:RegistroComponent},
  {path: 'login', component:AccesoComponent},
  {
    path: 'home',
    component: AccesoComponent

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
     
];
