import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ProjetComponent } from 'src/app/modules/projet/projet.component';
import { SprintsComponent } from 'src/app/modules/sprints/sprints.component';

const routes: Routes = [
  {
    path: '', component: ProjetComponent,
    children: [
      {
        path: 'projets',
        component: ProjetComponent,
        canActivate: [],
        loadChildren: () =>
          import('./../../modules/projet/projet.module').then((m) => m.ProjetModule).catch((error) => {}),
      },
      {
        path: 'sprints',
        component: SprintsComponent,
        canActivate: [],
        loadChildren: () =>
          import('./../../modules/sprints/sprints.module').then((m) => m.SprintsModule).catch((error) => {}),
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
