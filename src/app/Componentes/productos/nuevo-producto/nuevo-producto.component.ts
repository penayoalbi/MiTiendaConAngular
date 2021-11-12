import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/entidades/productos';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  producto!: Productos;

  constructor(private api: ApiService) {
    this.producto = new Productos;
   }

  ngOnInit(): void {
  }

  crearProducto(){

    console.log(this.producto.nombre);
    console.log(this.producto.precio);
    console.log(this.producto.descripcion);
    this.api.nuevoProducto(this.producto).subscribe(
      valor => {
        console.log(valor);
      }, err=>{
        console.log("Error en crear prodcuto");
      });
  }

}
