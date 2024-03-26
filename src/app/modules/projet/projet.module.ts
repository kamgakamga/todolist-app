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
import { SharedModule } from 'src/app/shared/shared.module';

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
    RadioButtonModule,
    DropdownModule,
    InputNumberModule,
    FileUploadModule,
    ToolbarModule,
    DialogModule,
    ToastModule,
    SharedModule
  ]
})
export class ProjetModule { }
