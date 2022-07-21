import { Component, Input} from '@angular/core';
import { Ingreso } from '../ingreso.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {

  @Input() ingreso: Ingreso;

  

  

}
