import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { ApiService } from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  esAdmin=true;

  @Output() cardProducto = new EventEmitter();

  constructor( private api: ApiService) { }

  ngOnInit(): void {
  }

  onToggleCard(): void {
    this.cardProducto.emit();
  }

  cardProd(){
    if(sessionStorage.getItem('')){
        this.esAdmin=false;
    }
  }

}
