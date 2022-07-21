import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gasto } from '../gasto.model';

@Component({
  selector: 'app-formulario-gasto',
  templateUrl: './formulario-gasto.component.html',
  styleUrls: ['./formulario-gasto.component.css']
})
export class FormularioGastoComponent{
  
  @Output() gasto = new EventEmitter<Gasto>();
  @Input() IngresoTotal:number;

  gastar(conceptoInput: HTMLInputElement,importeInput:HTMLInputElement){
    let concepto=conceptoInput.value;
    let importe=parseInt(importeInput.value);
    let porcentaje=Math.ceil(importe/this.IngresoTotal*100);
     let gasto1= new Gasto(concepto, importe,porcentaje);
     this.gasto.emit(gasto1);
  }
  
}
