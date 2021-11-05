import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  usuario!: Usuario;
  api: string;

  constructor(private http: HttpClient) { 
    this.api="http://localhost:666";
  }

  login(usuario:Usuario): Observable<Usuario[]>{
    return <Observable<Usuario[]>>(this.http.post(this.api+'/usuario/login',JSON.stringify(usuario)));
  }
  
}
