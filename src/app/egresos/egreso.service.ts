import { Egreso } from "./egreso.model";

export class EgresosService{

  egresos:Egreso[]=[
    new Egreso("Renta Depto",900),
    new Egreso("Ropa",200)
  ];

  eliminar(egreso: Egreso) {
    const i: number = this.egresos.indexOf(egreso);
    this.egresos.splice(i, 1);
  }
}
