import { Pipe, PipeTransform } from '@angular/core';
import { ProductosComponent } from '../Componentes/productos/productos/productos.component';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, arg: any): any  {
    const resultado = [];
    for( const prod of value){
      if (prod.nombre.toLowerCase().indexOf(arg.toLowerCase()) >-1){
        resultado.push(prod);
      }
    }
    return resultado;
  }

}
