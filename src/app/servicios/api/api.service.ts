import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/entidades/usuario';
import { UserServiceService } from './user-service.service';
import { map} from 'rxjs/operators';
import { Productos } from 'src/app/entidades/productos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  usuario!: Usuario;
  producto!: Productos;
  api: string;

  constructor(private http: HttpClient, private map: UserServiceService){
    this.api="http://localhost:666";
   // this.api="https://apipenayo.herokuapp.com";
  }

  login(usuario:Usuario): Observable<Usuario[]>{
    return <Observable<Usuario[]>>(this.http.post(this.api+'/usuario/login',JSON.stringify(usuario)));
  }

  sesion(user: Usuario): Observable<Usuario[]>{
    return <Observable<Usuario[]>>(this.http.post(this.api+'/usuario/login',JSON.stringify(user)));
  }

  crearUsuario(usuario: Usuario): Observable<Usuario[]>{
    return <Observable<Usuario[]>>(this.http.post(this.api+'/usuario/new',JSON.stringify(usuario)));
  }

  nuevoProducto(producto: Productos): Observable<Productos[]>{
    return <Observable<Productos[]>>(this.http.post(this.api+'/producto', JSON.stringify(producto)));
  }

  traerProductos(){
    return this.http.get(this.api+'/producto');
  }

  borrarProducto(id: number){
    return this.http.delete(this.api+'/producto/borrar/'+id);
  }

}
