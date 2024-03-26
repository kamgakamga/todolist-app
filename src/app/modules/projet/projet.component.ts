import { Component, OnInit } from '@angular/core';;
import { ProjetService } from 'src/app/services/projet.service';
import { Columns, ID_ETAT_IMPRIMABLE, IS_EXPORT, SORT_COLOMN, ASC, EMPTY_STRING } from './const';
import { formaterDate } from "../../helpers/global.helpers";
import { AppConstants } from 'src/app/app-constante';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericsService } from 'src/app/services/generics.service';
import { ProjetRequestDto } from 'src/app/models/dtos/requests/projet';
import Swal from 'sweetalert2';
import {EtatImprimableModel } from 'src/app/models/dtos/requests/etat.model';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
deleteSelectedProjets() {
throw new Error('Method not implemented.');
}
getSortColumn(arg0: any) {
throw new Error('Method not implemented.');
}

  public form!: FormGroup;
  selectedData: any;
  projetsList !: any | undefined;
  project: any;
  selectedProjets: any;
  responsableProjet: any;
  submitted: any;
  submittedPrint = false;
  projectDialog: boolean = false;
  projetOnner: any;
  public selectedProject !: any;
  public typeString = AppConstants.TYPE_STRING;
  public typeObject = AppConstants.TYPE_OBJECT;
  public typeDate = AppConstants.TYPE_DATE;
  public typeDateTime = AppConstants.TYPE_DATE_TIME;
  public typeNumber = AppConstants.TYPE_NUMBER;
  public formatDate = AppConstants.FORMAT_DATE;
  public formatDateTime = AppConstants.FORMAT_DATE_TIME;
  public columns: any[] = Columns.COLUMNS.filter(column => column.default === true);
  totalPages: any;
  totalElements: any;
  pageSize = 20 ;
  page = 0;
  ref: any;

  constructor(
              private projetService: ProjetService,
              public translateService: TranslateService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private genericsService : GenericsService,
              private _fb: FormBuilder
    ) { }

  ngOnInit(): void {

    console.log('composant projet appeller.');
    
    this._getListProjets(SORT_COLOMN, ASC,EMPTY_STRING);
    if(this.project){
      this._initForm(this.project)
    }else {
      this._initForm('');
      this.form.patchValue({
        dateDebut: formaterDate(new Date()) // Préchargez la dateDebut dans le formulaire
      });
    }
  }

  private _getListProjets(orderBy: any, sort: any, keyword: any) {
  this.genericsService.getPromiseResource(
    `${AppConstants.URL_PROJETS}?size=${this.pageSize}&page=${this.page}&keyword=${keyword}&sort=${sort}&orderBy=${orderBy}`)
    .then((res: any) => {
      this.projetsList = res.data.content;
      this.totalElements = res.data.totalElements;
      this.totalPages = res.data.totalPages;
    });
}

  private _getAllUtilisateurs(keyword: any) {
  this.genericsService.getPromiseResource(
    `${AppConstants.GET_LIST_UTILISATEURS}?keyword=${keyword}`)
    .then((res: any) => {
      console.log(res);
      this.responsableProjet = res.data.content;
      console.log('responsableProjet', this.responsableProjet);
      //this.loading = false;
    });
}
  
  private getProjectDetail(id: number) {
  this.genericsService.getPromiseResource(`${AppConstants.URL_PROJETS+'/'+id}`)
    .then((res: any) => {
      this.project = res.data;
      this._initForm(this.project);
      //this.loading = false;
    });
}
  
filterData(event : any){
this._getAllUtilisateurs(event.query)
}


  openNew() {
    this.projectDialog = true;
    this.project = {};
    this.submitted = false;
    this._getAllUtilisateurs('');
  }

  onSelectResponsable(event: any) {
    this.projetOnner = event;
}

  hideDialog() {
    this.projectDialog = false;
    this.submitted = false;
  }

  deleteProject(project: any) {
    Swal.fire({
      title: `${this.translateService.instant('CONFIRMATION')}`,
      text: `${this.translateService.instant('CONFIRM_DELETE')} ${project.nomProjet} ?` ,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: `${this.translateService.instant('SUPPRIMER')}`,
      cancelButtonText: `${this.translateService.instant('ANNULER')}`
    }).then((result) => {
      if (result.isConfirmed) {
        this.genericsService.deletePromiseResource(`${AppConstants.URL_PROJETS}/${project.id}`)
          .then((res: any) => {
            if (res.success === true) {
              this.genericsService.confirmResponseAPI(res.data, 'success', +`${AppConstants.DEFAULT_DURATION_MODAL}`,'top-end');
              this._getListProjets(SORT_COLOMN, ASC, EMPTY_STRING);   
             } else {
               Swal.fire('ERROR', `${this.translateService.instant('UNE_ERREUR_EST_SURVENU')}`, 'error');
             }
          })
          .catch((error) => {
            this.genericsService.confirmResponseAPI(error.error.message, 'error', +`${AppConstants.DEFAULT_DURATION_MODAL}`,'top-end');
          });
      }
    });
  }
    
  public editProject(project: any) {
   this.openNew();
   this.getProjectDetail(+project.id);
  }

  public getObject(projet: any) {
    this.project = {...projet};
  }

  private _initForm(data :any) {
    const valueDateDebut = (data && data.dateDebut) ? formaterDate(new Date(data.dateDebut)) : null;
    const valueDateFin = (data && data.dateFin) ? formaterDate(new Date(data.dateFin)) : null;
    this.form = this._fb.group({
      projectName: [(data && data.nomProjet) ? data.nomProjet : null, [Validators.required,Validators.minLength(4), Validators.maxLength(30)]],
      projectDescription: [(data && data.description) ? data.description : null, [Validators.maxLength(150)]],
      projectResponsable: [(data && data.responsable) ? data.responsable.id : null],
      projectDateDebut: [(data && data.dateDebut) ? valueDateDebut : null],
      projectDateFin: [(data && data.dateFin ) ? valueDateFin : null],
    }, { validator: this._dateValidation });
  }

  public get f() {
    return this.form.controls
  }

  public loadProject($event: LazyLoadEvent) {
    this._getListProjets(EMPTY_STRING,EMPTY_STRING,EMPTY_STRING);
    }

  public  onSearchProject(event: Event) {
      const value = (event.target as HTMLInputElement).value;
         this._getListProjets(SORT_COLOMN, ASC, value);
  }
   
  private  _dateValidation(formGroup: FormGroup) {
      const dateDebut = formGroup.get('projectDateDebut')?.value;
      const dateFin = formGroup.get('projectDateFin')?.value;
      if (dateDebut !== null && dateFin !== null) {
      if (dateDebut && dateFin && dateDebut >= dateFin) {
        formGroup.get('projectDateFin')?.setErrors({ dateInvalide: true });
      } else {
        formGroup.get('projectDateFin')?.setErrors(null);
      }
    }
  }

  public onSave(): void {
    console.log('f',this.f);
    this.submitted = true;
    if (!this.form.valid){
      console.log('formulaire invalid');
      return;
    }

    const dto = new ProjetRequestDto(
      this.project ?  this.project.id : 0,
      this.f['projectName'] && this.f['projectName'].value ? this.f['projectName'].value : null,
      this.f['projectDescription'] && this.f['projectDescription'].value ? this.f['projectDescription'].value:null,
      this.f['projectDateDebut'] && this.f['projectDateDebut'].value ? this.f['projectDateDebut'].value : null,
      this.f['projectDateFin'] && this.f['projectDateFin'].value ? this.f['projectDateFin'].value : null,
      [],
      this.f['projectResponsable'] && this.f['projectResponsable'].value ? +this.f['projectResponsable'].value.id : 0,
      []
    )
    this.genericsService.postPromiseResource(`${AppConstants.URL_PROJETS}`, dto)
      .then((res: any) => {
      this._getListProjets(EMPTY_STRING,EMPTY_STRING,EMPTY_STRING);
      this.projectDialog = false;
        this.genericsService.confirmResponseAPI(res.message, 'success', +`${AppConstants.DEFAULT_DURATION_MODAL}`,'top-end');
        this.project = {};
     this.ref.close();
    }).catch((err) => {
      console.log(err);
    })
    this.project ={};
  }
    
public onPrintListProject(type: boolean) {
  this.submittedPrint = true;
  const dto = new EtatImprimableModel(
              ID_ETAT_IMPRIMABLE,
              IS_EXPORT, 
              []
              );
  this.genericsService.reportPostResource(`${AppConstants.URL_IMPRESSION}`, dto).then((result: any) => {
    this.genericsService.getByteArrayAndSaveReportPDF(result, `Report_File_`, 0);
  });
}
}