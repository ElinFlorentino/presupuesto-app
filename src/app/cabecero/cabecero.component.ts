import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  @Input() presupuestototal:number;
  @Input() ingresosTotal: number;
  @Input() egresosTotal:number;
  @Input() porcentajeTotal: number;
  constructor() { }

  ngOnInit(): void {
  }

}
