import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesayunosComponent } from './desayunos/desayunos/desayunos.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'desayunos', component: DesayunosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
