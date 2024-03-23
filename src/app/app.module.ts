import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarModule} from 'primeng/toolbar';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarModule} from 'primeng/calendar';
import { DialogModule} from 'primeng/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NavBarComponent } from './dashboard/components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { AdminModule } from './layouts/admin/admin.module';
import { TableModule } from 'primeng/table';
import { ProjetModule } from './modules/projet/projet.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ConfirmationService, MessageService } from 'primeng/api';

export function createTranslateLoader(httpClient:HttpClient) {
  return new TranslateHttpLoader(httpClient,'./assets/i18n/','.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  exports: [TranslateModule],
  imports: [
    AdminModule,
    ToolbarModule,
    ProjetModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CalendarModule,
    TableModule,
    DialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
     TranslateModule.forRoot({
       loader:{
         provide: TranslateLoader,
         useFactory: (createTranslateLoader),
         deps:[HttpClient]
       }
     }),
     RouterModule.forRoot([
      // Définissez vos routes ici
    ])
  ],
  providers: [MessageService,
              ConfirmationService,
              Location,],
  bootstrap: [AppComponent]
})
export class AppModule { }
