import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesayunosComponent } from './desayunos/desayunos/desayunos.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'desayunos', component: DesayunosComponent },
  { path: '', redirectTo: '/charmingAngular/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
