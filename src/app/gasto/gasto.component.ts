import { Component, Input} from '@angular/core';
import { Gasto } from '../gasto.model';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent{

  @Input() gasto: Gasto;
  @Input() IngresoTotal:number;

}
