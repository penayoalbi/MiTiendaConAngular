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
  constructor(private ruteo: Router,private api:ApiService, private userService: UserServiceService){ 
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
     // this.saveToken(resp[0].token);
      sessionStorage.setItem('usuario',resp[0].usuario);

      this.userService.setUsuario(resp[0]);
      this.ruteo.navigateByUrl('principal');
    }
  }
   logeo(){
   //console.log(this.usuario.usuario);
  // console.log(this.usuario.clave);
    this.api.login(this.usuario).subscribe(datos=>{
     this.ingreso(datos);
    },err=>alert(err.Message));
  }

  private checkToken():void{
    const userToken = localStorage.getItem('token');
   // const valido = //validar si no expiro;
    //usuarioLogeado = valido; 

  }
  private saveToken(token: string): void{
   // localStorage.setItem('token', token);
  }


}
