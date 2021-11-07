import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/entidades/usuario';
import { UserServiceService } from './user-service.service';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  usuario!: Usuario;
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
}
