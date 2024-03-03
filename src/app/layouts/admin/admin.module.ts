import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PanelMenuModule } from 'primeng/panelmenu';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    PanelMenuModule,
    MenubarModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class AdminModule { }
