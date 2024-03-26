import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path: 'auth',
  canActivate: [],
  loadChildren: () =>
    import('./layouts/auth/auth.module').then((m) => m.AuthModule).catch((error) => {}),
},
{
  path: '',
  canActivate: [],
  loadChildren: () =>
    import('./layouts/admin/admin.module').then((m) => m.AdminModule).catch((error) => {}),
},
{
  path: '**',
  redirectTo: 'auth',
  pathMatch: 'full',
},
];

@NgModule({
imports: [RouterModule.forRoot(routes, {useHash: true })],
exports: [RouterModule]
})
export class AppRoutingModule { }