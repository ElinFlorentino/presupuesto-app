import { Ingreso } from './ingreso.model';

export class IngresoService {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta Coche', 500),
  ];

  eliminar(ingreso: Ingreso) {
    const i: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(i, 1);
  }
}
