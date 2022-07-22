import { Component } from '@angular/core';
import { Gasto } from './gasto.model';
import { IndiceBorrar } from './indiceborrar.model';
import { Ingreso } from './ingreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Presupuesto';
  IngresoTotal:number=1230;
  GastoTotal:number=500;
  Porcentaje:number=41;

  ingreso: Ingreso[] = [
    new Ingreso('Sueldo',1200), 
    new Ingreso('Dividendos',30)
  ];

  ingresoAgregada(ingreso: Ingreso){
    this.ingreso.push(ingreso);
    this.IngresoTotal+=ingreso.ingreso;
    this.Porcentaje=Math.ceil(this.GastoTotal/this.IngresoTotal*100)
  }

  
  gasto: Gasto[] = [
    new Gasto('Mercadona',200, Math.ceil(200/1200*100)), 
    new Gasto('Hipoteca',300, Math.ceil(300/1200*100))
  ];

  gastoAgregada(gasto: Gasto){
    this.gasto.push(gasto);
    this.GastoTotal+=gasto.gasto;
    this.Porcentaje=Math.ceil(this.GastoTotal/this.IngresoTotal*100)
    
  }

  borrarMatriz(posicion: IndiceBorrar){
  
    let aux=posicion.indice;
    let restar=this.ingreso[aux].ingreso;
    this.IngresoTotal-=restar;
    this.ingreso.splice(aux,1);
    this.Porcentaje=Math.ceil(this.GastoTotal/this.IngresoTotal*100)
  }

  borrarMatrizGasto(posicion: IndiceBorrar){
    let aux=posicion.indice;
    let sumar=this.gasto[aux].gasto;
    this.GastoTotal-=sumar;
    this.gasto.splice(aux,1);
    this.Porcentaje=Math.ceil(this.GastoTotal/this.IngresoTotal*100)
  }


  
}
