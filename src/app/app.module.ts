import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { PrincipalComponent } from './Componentes/principal/principal.component';
import { NuevoComponent } from './Componentes/nuevo/nuevo.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { NoEncontradoComponent } from './Componentes/no-encontrado/no-encontrado.component';
import { ProductosComponent } from './Componentes/productos/productos/productos.component';
import { NuevoProductoComponent } from './Componentes/productos/nuevo-producto/nuevo-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UserServiceService } from './servicios/api/user-service.service';
import { ProductoServiceService } from './servicios/api/producto-service.service';
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';
import { PipePipe } from './pipes/pipe.pipe';
import { FooterComponent } from './Componentes/footer/footer.component';
import { ResaltarDirective } from './directivas/resaltar.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    NuevoComponent,
    EditarComponent,
    NoEncontradoComponent,
    ProductosComponent,
    NuevoProductoComponent,
    NavegacionComponent,
    PipePipe,
    FooterComponent,
    ResaltarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [HttpClient, 
    UserServiceService,
    ProductoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
