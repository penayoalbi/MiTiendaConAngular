import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/entidades/productos';
import { ApiService } from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  talles: number[]=[35,36,37];
  nuevo:boolean;
  prod: any = [];
  color = '';

  constructor(private api:ApiService) {
    this.nuevo=false;
   }


  ngOnInit(){
    this.api.traerProductos().subscribe(
      resp =>{
         // console.log(resp),
        this.prod = resp;
      },
      err => console.error(err)
    );
    }
    eliminar(id:number){
      console.log(id);
    }

}
