import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosListComponent } from './servicios-list/servicios-list.component';
import { RomaNosotrasComponent } from './roma-nosotras/roma-nosotras.component';
import { RomaServiciosComponent } from './roma-servicios/roma-servicios.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputNumeroComponent } from './input-numero/input-numero.component';
import { RomaHomeComponent } from './roma-home/roma-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosListComponent,
    RomaNosotrasComponent,
    RomaServiciosComponent,
    RomaHomeComponent,
    CarritoComponent,
    InputNumeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
