import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  sesion: boolean;

  constructor() {
    this.sesion= false;
   }

  ngOnInit(): void {
  }

  cerrarSesion(){
    sessionStorage.removeItem('usuario');
    this.sesion=true;
  }

}
