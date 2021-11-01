import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './Componentes/editar/editar.component';
import { LoginComponent } from './Componentes/login/login.component';
import { NoEncontradoComponent } from './Componentes/no-encontrado/no-encontrado.component';
import { NuevoComponent } from './Componentes/nuevo/nuevo.component';
import { PrincipalComponent } from './Componentes/principal/principal.component';


const routes: Routes = [
 {path: '', redirectTo: 'login', pathMatch: 'full'},
 {path: 'login', component: LoginComponent},
 {path: 'principal',component: PrincipalComponent},
 {path: 'nuevo', component: NuevoComponent},
 {path: 'editar', component: EditarComponent},
 {path: '**', component: NoEncontradoComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents =  [LoginComponent,PrincipalComponent, EditarComponent, NuevoComponent ]