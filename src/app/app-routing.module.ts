import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'projets', pathMatch: 'full'}
];

@NgModule({
  imports: [],
  exports: []
})
export class AppRoutingModule { }
