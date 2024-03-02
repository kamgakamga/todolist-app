import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProjetRoutingModule } from './projet-routing.module';
import { ProjetComponent } from './projet.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule  } from 'primeng/fileupload';
import { ToolbarModule  } from 'primeng/toolbar';
import { DialogModule  } from 'primeng/dialog';
import { ToastModule  } from 'primeng/toast';
import { ConfirmDialogModule  } from 'primeng/confirmdialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(httpClient:HttpClient) {
  return new TranslateHttpLoader(httpClient,'./assets/i18n/','.json');
}
@NgModule({
  declarations: [ProjetComponent],
  exports: [
    ProjetComponent
],
  imports: [
    AutoCompleteModule,
    ConfirmDialogModule,
    CommonModule,
    ProjetRoutingModule,
    ReactiveFormsModule,
    TableModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps:[HttpClient]
      }
    }),
    RadioButtonModule,
    DropdownModule,
    InputNumberModule,
    FileUploadModule,
    ToolbarModule,
    DialogModule,
    ToastModule
  ]
})
export class ProjetModule { }
