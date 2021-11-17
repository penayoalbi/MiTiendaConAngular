import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/entidades/productos';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  mostrar?: boolean;
  producto!: Productos;
  nombre = "";
  constructor(private api: ApiService) {

   }

  ngOnInit(): void {
  }

  cerrarSesion(){
    sessionStorage.removeItem('usuario');
    this.mostrar=true;
  //  this.cerrar= true;
  }

  mostrarlink():any{
    if(sessionStorage.getItem('usuario')=== null){
      return this.mostrar = true;
    }
  }

}
