import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Gasto } from '../gasto.model';
import { IndiceBorrar } from '../indiceborrar.model';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent{

  @Input() gasto: Gasto;
  @Input() IngresoTotal:number;
  @Input() indice: number;
  @Output() posicionBorrarGasto=new EventEmitter<IndiceBorrar>();


  borrar(indice:number){
   let posicion= new IndiceBorrar(indice);
    this.posicionBorrarGasto.emit(posicion);
}
}
