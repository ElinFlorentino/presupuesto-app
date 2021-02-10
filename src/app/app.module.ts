import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoService } from './ingresos/ingreso.service';
import { EgresosService } from './egresos/egreso.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IngresosComponent,
    EgresosComponent,
    FormularioComponent,
    CabeceroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoService,EgresosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
