import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesayunosComponent } from './desayunos/desayunos/desayunos.component';
import { HomeComponent } from './home/home/home.component';
import { CenasComponent } from './cenas/cenas/cenas.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { FormasDePagoComponent } from './formas-de-pago/formas-de-pago/formas-de-pago.component';
import { EntregasComponent } from './entregas/entregas/entregas.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'desayunos', component: DesayunosComponent },
  { path: 'cenas', component: CenasComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'formas-de-pago', component: FormasDePagoComponent },
  { path: 'entregas', component: EntregasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
