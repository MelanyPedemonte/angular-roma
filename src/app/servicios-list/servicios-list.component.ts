import { Component, OnInit } from '@angular/core';
import { ServicioCarritoService } from '../servicio-carrito.service';
import { Servicio } from './servicio';

@Component({
  selector: 'app-servicios-list',
  templateUrl: './servicios-list.component.html',
  styleUrls: ['./servicios-list.component.scss']
})
export class ServiciosListComponent implements OnInit {

  servicios:Servicio[] = [{
    nombre : 'Kit PressOn simple',
    material: 'Acrilico',
    nailart: 1,
    precio: 500,
    stock: 5,
    image: './assets/img/lila.jfif',
    cantidad:0,
  },
  {
    nombre : 'Kit PressOn especial',
    material: 'Acrilico',
    nailart: 5,
    precio: 750,
    stock: 5,
    image: './assets/img/byw.jfif',
    cantidad:0,
  },
  {
    nombre : 'Kit PressOn',
    material: 'Acrilico',
    nailart: 2,
    precio: 600,
    stock: 0,
    image: './assets/img/celeste.jfif',
    cantidad:0,
  }
];

  constructor(private carrito: ServicioCarritoService) { 
  }

  ngOnInit(): void {
  }

  addCarrito(servicio: Servicio): void{
    this.carrito.addCarrito(servicio);
    servicio.stock-=servicio.cantidad;
    servicio.cantidad=0;
  }


}
