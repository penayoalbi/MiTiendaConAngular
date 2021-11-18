import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { ApiService } from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 
  isAdmin;
  constructor( private api: ApiService) { 
    this.isAdmin = sessionStorage.getItem('usuario')==='admin';
  }

  ngOnInit(): void {
    console.log(this.isAdmin);
  }

}
