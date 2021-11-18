import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { LoginComponent } from './Componentes/login/login.component';
import { NoEncontradoComponent } from './Componentes/no-encontrado/no-encontrado.component';
import { NuevoComponent } from './Componentes/nuevo/nuevo.component';
import { PrincipalComponent } from './Componentes/principal/principal.component';
import { NuevoProductoComponent } from './Componentes/productos/nuevo-producto/nuevo-producto.component';
import { ProductosComponent } from './Componentes/productos/productos/productos.component';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
 {path: '', redirectTo: 'principal', pathMatch: 'full'},
 {path: 'login', component: LoginComponent},
 {path: 'principal',component: PrincipalComponent},
 {path: 'nuevo', component: NuevoComponent},
 {path: 'editar', component: EditarComponent,canActivate:[GuardGuard]},
 {path: 'productos', component: ProductosComponent},
 { path: 'addproducto', component: NuevoProductoComponent, canActivate:[GuardGuard]},
 {path: 'favorito', component: CarritoComponent},
 {path: '**', component: NoEncontradoComponent},
 
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const  routingComponents =  [LoginComponent,PrincipalComponent, EditarComponent, NuevoComponent ]