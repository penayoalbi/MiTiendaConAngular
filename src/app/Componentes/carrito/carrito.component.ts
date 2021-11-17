import { Component, Input, OnInit } from '@angular/core';
import { ProductoServiceService } from 'src/app/servicios/api/producto-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  @Input()datosEntrante: any;

  constructor( private serviProducto: ProductoServiceService) { }

  public listaFavorito: Array<any>= [];

  ngOnInit(): void {
    this.serviProducto.disparadorFavorito.subscribe(data =>{
      this.listaFavorito.push(data)}) 
  }

}
