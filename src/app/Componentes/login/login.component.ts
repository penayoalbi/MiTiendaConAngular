import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
 // formLogin: FormGroup;


  constructor(private ruteo: Router,
     private api:ApiService,
     private userService: UserServiceService,
     private builder: FormBuilder) { 
     this.usuario = new Usuario;
    // this.formLogin = this.builder.group({
    //  usuario: new FormControl('',Validators.required),
    //  clave: new FormControl('',Validators.required)}
   // );

  }

  ngOnInit(): void {
  }

/*
  logeo(){
    console.log(this.formLogin);
    this.usuario.usuario = this.formLogin.value.usuario;
    this.usuario.clave = this.formLogin.value.clave;
    
    this.api.sesion(this.usuario).subscribe(datos=>{
      console.log(datos);
      alert("ok");
    },err=>{
      alert("error")
    })
  }*/

  ingreso(resp: Usuario[]){
    if(resp.length==0){
      alert("Error: usuario no valido");
    }else{
      this.userService.setUsuario(resp[0]);
      this.ruteo.navigateByUrl('principal');
    }
  }
  
   logeo(){
   console.log(this.usuario.usuario);
   console.log(this.usuario.clave);

    this.api.login(this.usuario).subscribe(datos=>{
     this.ingreso(datos);
     // this.ingreso(datos));
    },err=>alert(err.Message));
  }

  altaUser(){
    this.ruteo.navigateByUrl('principal');
  }

}
