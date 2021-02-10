import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresosService } from './egreso.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css'],
})
export class EgresosComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() ingresoTotal: number;

  constructor(private egresosService: EgresosService) {}

  ngOnInit(): void {
    this.egresos = this.egresosService.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresosService.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }
}
