import { Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';

//este array sirve para asociar
//ruta y componente

export const routes: Routes = [
   {path:'demoalumno', component: DemoComponent},
   {path:'listadoAlumnos', component: ListadoAlumnosComponent} ,
   {path:'busquedaAlumno', component: BusquedaComponent},
  {path:'formulario', component:FormularioAlumnoComponent},
  {path:'formulario/edit/:idAlumno', component:FormularioAlumnoComponent}
     
];
