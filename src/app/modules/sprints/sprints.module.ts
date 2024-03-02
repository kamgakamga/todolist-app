import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintsRoutingModule } from './sprints-routing.module';
import { SprintsComponent } from './sprints.component';


@NgModule({
  declarations: [SprintsComponent],
  imports: [
    CommonModule,
    SprintsRoutingModule
  ]
})
export class SprintsModule { }
