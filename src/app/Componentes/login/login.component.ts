import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { ApiService } from 'src/app/servicios/api/api.service';
import { UserServiceService } from 'src/app/servicios/api/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario!: Usuario;

  constructor(private ruteo: Router,
     private api:ApiService,
     private userService: UserServiceService) { 
    this.usuario = new Usuario;
  }

  ngOnInit(): void {
  }

  logeo(){
    this.api.login(this.usuario).subscribe(datos=>{
      console.log(datos);
    })
  }

}
