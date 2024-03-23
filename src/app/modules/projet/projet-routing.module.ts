import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetComponent } from './projet.component';


const routes: Routes = [
     {path: 'projets', component: ProjetComponent},
     {path: '', redirectTo: 'projets', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }
