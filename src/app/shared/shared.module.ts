import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PanelMenuModule} from 'primeng/panelmenu';
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { createTranslateLoader } from "../app.module";

const declarations= [];
const shared = [
    TranslateModule
];

@NgModule({
    declarations: [],
    imports: [
        PanelMenuModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader:{
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps:[HttpClient]
            }
          }),
    ],
    exports: [...shared],
    providers: []
})
export class SharedModule { }
