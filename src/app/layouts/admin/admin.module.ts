import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    MenubarModule,
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class AdminModule { }
