import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egresos/egreso.model';
import { EgresosService } from '../egresos/egreso.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { IngresoService } from '../ingresos/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  entrada: string = 'ingreso';
  descripcionInput: string;
  valorInput: number;

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresosService
  ) {}

  ngOnInit(): void {}

  operacion(evento) {
    this.entrada = evento.target.value;
  }
  
  agregarRegistro() {
    if (this.entrada === 'ingreso') {
      this.ingresoService.ingresos.push(
        new Ingreso(this.descripcionInput, this.valorInput)
      );
    } else {
      this.egresoService.egresos.push(
        new Egreso(this.descripcionInput, this.valorInput)
      );
    }
  }
}
