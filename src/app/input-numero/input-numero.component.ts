import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Servicio } from '../servicios-list/servicio';

@Component({
  selector: 'app-input-numero',
  templateUrl: './input-numero.component.html',
  styleUrls: ['./input-numero.component.scss']
})
export class InputNumeroComponent implements OnInit {

  constructor() { }
  
  @Input()
  cantidad: number;

  @Input()
  max: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  upCantidad(){
    if(this.cantidad < this.max)
        this.cantidad++;
        this.cantidadChange.emit(this.cantidad);
  }

  downCantidad(){
    if(this.cantidad > 0)
        this.cantidad--;
        this.cantidadChange.emit(this.cantidad);
  }

}
