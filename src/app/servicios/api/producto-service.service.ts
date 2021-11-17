import { Injectable, Output, EventEmitter  } from '@angular/core';
import { Productos } from 'src/app/entidades/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {
  producto!: Productos;

  //decorador
  @Output() disparadorFavorito: EventEmitter<any> = new EventEmitter();
  constructor() { }

  setProducto(producto: Productos){
    this.producto = producto;
  } 
  getProducto(){
    return this.producto;
  }
}
