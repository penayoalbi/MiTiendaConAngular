import { Component, Input, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Productos } from 'src/app/entidades/productos';
import { ProductoServiceService } from 'src/app/servicios/api/producto-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  
  @Input()datosEntrante!: any;

  constructor( private serviProducto: ProductoServiceService) { }

  public listaFavorito: Array<Productos> = [];

  ngOnInit(): void {
    this.serviProducto.disparadorFavorito.subscribe(data =>{
      this.listaFavorito.push(data)}); 
      //console.log(this.listaFavorito); 
  }

  addFavorito():void{
    console.log('data'+this.datosEntrante);

  }

}
