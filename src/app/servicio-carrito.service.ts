import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Servicio } from './servicios-list/servicio';

@Injectable({
  providedIn: 'root'
})

export class ServicioCarritoService {

  private _listaCompras: Servicio[] = [];
  listaCompras: BehaviorSubject<Servicio[]> = new BehaviorSubject([]);

  constructor() { }

  addCarrito(servicio: Servicio) {
    let item: Servicio = this._listaCompras.find((v1) => v1.nombre == servicio.nombre);
    if(!item) {
      this._listaCompras.push({ ... servicio});
    } else {
      item.cantidad += servicio.cantidad;
    }
    console.log(this._listaCompras);
    this.listaCompras.next(this._listaCompras);
  }
 
  
}
