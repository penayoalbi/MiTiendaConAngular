import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  usuario!: Usuario;
  constructor() { }

  setUsuario(usuario: Usuario){
    this.usuario = usuario;
  } 
  getUsuario(){
    return this.usuario;
  }
}
