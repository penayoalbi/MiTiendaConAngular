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
     private builder: FormBuilder)
     { 
     this.usuario = new Usuario;
     if(sessionStorage.getItem('usuario')!=null){
       this.ruteo.navigate(['/principal']);
     }
     
    // this.formLogin = this.builder.group({
    //  usuario: new FormControl('',Validators.required),
    //  clave: new FormControl('',Validators.required)}
   // );
  }

  ngOnInit(): void {
  }

  ingreso(resp: Usuario[]){
    if(resp.length==0){
      alert("Error: usuario no valido");
    }else{
      sessionStorage.setItem('usuario',resp[0].usuario);
      this.userService.setUsuario(resp[0]);
      this.ruteo.navigateByUrl('principal');
    }
  }
   logeo(){
   console.log(this.usuario.usuario);
   console.log(this.usuario.clave);
    this.api.login(this.usuario).subscribe(datos=>{
     this.ingreso(datos);
    },err=>alert(err.Message));
  }

  altaUser(){
    this.ruteo.navigateByUrl('principal');
  }

  cerrarSesion(){
    sessionStorage.removeItem('usuario');
    this.ruteo.navigateByUrl('login');
  }

}
