import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IndiceBorrar } from '../indiceborrar.model';
import { Ingreso } from '../ingreso.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {

  @Input() ingreso: Ingreso;
  @Input() indice: number;
  @Output() posicionBorrar=new EventEmitter<IndiceBorrar>();


  borrar(indice:number){
   let posicion= new IndiceBorrar(indice);
    this.posicionBorrar.emit(posicion);
}

  

  

}
