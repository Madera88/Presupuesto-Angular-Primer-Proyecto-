import { Component, EventEmitter, Output } from '@angular/core';
import { Ingreso } from '../ingreso.model';

@Component({
  selector: 'app-formulario-ingreso',
  templateUrl: './formulario-ingreso.component.html'
})
export class FormularioIngresoComponent {

  @Output() ingreso = new EventEmitter<Ingreso>();

  ingresar(conceptoInput: HTMLInputElement,importeInput:HTMLInputElement){
    let concepto=conceptoInput.value;
    let importe=parseInt(importeInput.value);
     let ingreso1= new Ingreso(concepto, importe);
     this.ingreso.emit(ingreso1);
  }
  

}
