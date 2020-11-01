import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ServicioCarritoService } from '../servicio-carrito.service';
import { Servicio } from '../servicios-list/servicio';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  listaCompras: Servicio[];

  constructor(private carrito: ServicioCarritoService) { 
    carrito.listaCompras.subscribe(observable=>{this.listaCompras = observable});
  }

  ngOnInit(): void {
  }




}
