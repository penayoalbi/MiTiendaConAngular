import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/entidades/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  talles: number[]=[35,36,37];
  nuevo:boolean;

  constructor() {
    this.nuevo=false;
   
   }


  ngOnInit(): void {
  }

  

}
