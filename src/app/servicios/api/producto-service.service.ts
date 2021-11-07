import { Injectable } from '@angular/core';
import { Productos } from 'src/app/entidades/productos';
@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {
  producto!: Productos;
  constructor() { }
  setProducto(producto: Productos){
    this.producto = producto;
  } 
  getProducto(){
    return this.producto;
  }
}
