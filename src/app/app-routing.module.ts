import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RomaNosotrasComponent } from './roma-nosotras/roma-nosotras.component';
import { RomaServiciosComponent } from './roma-servicios/roma-servicios.component';

const routes: Routes = [
  {path: '', redirectTo: 'servicios', pathMatch: 'full'},
  {path: 'nosotras', component: RomaNosotrasComponent},
  {path: 'servicios', component: RomaServiciosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
