import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor( private api: ApiService) { }

  ngOnInit(): void {
  }


}
