import { Component, Input, OnInit, Output } from '@angular/core';
import { Productos } from 'src/app/entidades/productos';
import { ApiService } from 'src/app/servicios/api/api.service';
import { ProductoServiceService } from 'src/app/servicios/api/producto-service.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

 @Output()data: any; 
 // talles: number[]=[35,36,37];
  nuevo:boolean;
  prod: any = [];
  color = '';
  filtrarPorNombre = '';

  constructor(private api:ApiService, private serviProducto: ProductoServiceService ) {
    this.nuevo=false;
   }
   
  ngOnInit(){
    this.api.traerProductos().subscribe(
      resp =>{
         // console.log(resp),
        this.prod = resp;
      },
      err => console.error(err));
    }

    eliminar(id:number){
      console.log(id);
      this.api.borrarProducto(id).subscribe(
        resp=> {console.log('se elimino correctamente')},
        err => {console.log('error al eliminar')}
      );
    }

    agregarFavorito(){
     // console.log(this.prod);
      this.serviProducto.disparadorFavorito.emit({data: this.prod});
    }
}
