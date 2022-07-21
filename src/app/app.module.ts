import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioIngresoComponent } from './formulario-ingreso/formulario-ingreso.component';
import { FormularioGastoComponent } from './formulario-gasto/formulario-gasto.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { GastoComponent } from './gasto/gasto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormularioIngresoComponent,
    FormularioGastoComponent,
    IngresoComponent,
    GastoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
