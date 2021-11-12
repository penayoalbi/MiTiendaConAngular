import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  usuario: Usuario;

  constructor(private api:ApiService) {
    this.usuario= new Usuario;
   }

  ngOnInit(): void {
  }

  registrarUsuario(){
   console.log("click en registrarse");

    this.api.crearUsuario(this.usuario).subscribe(
      rs=>{
      console.log(rs);
    },err=>{
      console.log("error en nuevo");
    });
  }


}
