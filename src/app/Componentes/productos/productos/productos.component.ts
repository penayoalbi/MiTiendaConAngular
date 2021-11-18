import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Productos } from 'src/app/entidades/productos';
import { ApiService } from 'src/app/servicios/api/api.service';
import { ProductoServiceService } from 'src/app/servicios/api/producto-service.service';
import { ResaltarDirective } from 'src/app/directivas/resaltar.directive';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

 @Output()
 emitirProducto: EventEmitter<any> = new EventEmitter();

  nuevo:boolean;
  prod: any = [];
  color!:'';
  filtrarPorNombre = '';

  constructor(private api:ApiService, private serviProducto: ProductoServiceService ) {
    this.nuevo=false;
   }
   
  ngOnInit(){
    this.getListarProductos();
    }

    getListarProductos(){
      this.api.traerProductos().subscribe(
        resp =>{
           // console.log(resp),
          this.prod = resp;
        },
        err => console.error('error en listar')
      );
    }

    eliminar(id:number){
      console.log(id);
      this.getListarProductos();
      this.api.borrarProducto(id).subscribe(
        resp => {
          console.log('se elimino correctamente');
      },
       err => console.log('error al eliminar'));
    }

    agregarFavorito(){
     // console.log(this.prod);
    // this.emitirProducto.emit(); 
    }
}
