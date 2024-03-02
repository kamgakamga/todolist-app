import { Component, OnInit } from '@angular/core';;
import { ProjetService } from 'src/app/services/projet.service';
import { Columns } from './const';
import { AppConstants } from 'src/app/app-constante';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericsService } from 'src/app/services/generics.service';
import { ProjetRequestDto } from 'src/app/models/dtos/requests/projet';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
deleteSelectedProjets() {
throw new Error('Method not implemented.');
}
  public form!: FormGroup;
  selectedData: any;
  projetsList !: any | undefined;
  project: any;
  selectedProjets: any;
  responsableProjet: any;
  submitted: any;
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

  constructor(private projetService: ProjetService,
              public translateService: TranslateService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private genericsService : GenericsService,
              private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.getListProjets('id','ASC','');
    console.log('getAllUtilisateurs', this.responsableProjet);
    
    if(this.project){
      this._initForm(this.project)
    }else {
      this._initForm('');
            // Analyser la chaîne de date en objet Date
            const dateFromServer: Date = new Date();
            // Formater la date au format YYYY-MM-DD
            const formattedDate = this.formatsDate(dateFromServer);
      this.form.patchValue({
        dateDebut: formattedDate // Préchargez la dateDebut dans le formulaire
      });
    }
  
  }

  private formatsDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${day}/${month}/${year}`;
  }

  private getListProjets(orderBy: any, sort: any, keyword: any) {
  this.genericsService.getPromiseResource(
    `${AppConstants.URL_PROJETS}?size=${this.pageSize}&page=${this.page}&keyword=${keyword}&sort=${sort}&orderBy=${orderBy}`)
    .then((res: any) => {
      console.log(res);
      this.projetsList = res.data.content;
      this.totalElements = res.data.totalElements;
      this.totalPages = res.data.totalPages;
      //this.loading = false;
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
      console.log('res',res);
      this.project = res.data;
      this._initForm(this.project);
      console.log('this.project ',this.project );
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


  hideDialog() {
    this.projectDialog = false;
    this.submitted = false;
  }

  deleteProject(project: any) {
    Swal.fire({
      title: 'Confirmation',
      text: `Êtes-vous sûr de vouloir supprimer le projet ${project.nomProjet} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.genericsService.deletePromiseResource(`${AppConstants.URL_PROJETS}/${project.id}`)
          .then((res: any) => {
            if (res.success === true) {
              this.genericsService.confirmResponseAPI(res.data, 'success', +`${AppConstants.DEFAULT_DURATION_MODAL}`,'top-end');
              this.getListProjets('id', 'ASC', '');   
             } else {
               Swal.fire('Erreur', 'Une erreur s\'est produite lors de la suppression du projet.', 'error');
             }
          })
          .catch((error) => {
            this.genericsService.confirmResponseAPI(error.error.message, 'error', +`${AppConstants.DEFAULT_DURATION_MODAL}`,'top-end');
          });
      }
    });
  }
    
  

  editProject(project: any) {
   this.openNew();
    this.getProjectDetail(+project.id);
  }
 
  getSortColumn(arg0: any) {
  throw new Error('Method not implemented.');
  }

  getObject(projet: any) {
    this.project = {...projet};
  }

  private _initForm(data :any) {

    const currentDate = new Date().toISOString().substr(0,10);
    const valueDateDebut = (data && data.dateDebut) ? new Date(data.dateDebut).toISOString().substr(0,10):'';
    const valueDateFin = (data && data.dateFin) ? new Date(data.dateFin).toISOString().substr(0,10):'';

    this.form = this._fb.group({
      projectName: [(data && data.nomProjet) ? data.nomProjet : '', [Validators.required,Validators.maxLength(30), Validators.required]],
      projectDescription: [(data && data.description) ? data.description : '', [Validators.maxLength(150)]],
      projectResponsable: [(data && data.responsable) ? data.responsable.id : '',[Validators.maxLength(60)]],
      projectDateDebut: [(data && data.dateDebut) ? valueDateDebut : currentDate],
      projectDateFin: [(data && data.dateFin ) ? valueDateFin : currentDate],
    }, { validator: this.dateValidation });
  }
  get f() {
    return this.form.controls
  }

  loadProject($event: LazyLoadEvent) {
    console.log('event',$event);
    this.getListProjets('','','');
    }

    onSearchProject(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      console.log('Keyword:', value);
         console.log('Keyword:', value);
         this.getListProjets('id', 'ASC', value);
  }
   
    dateValidation(formGroup: FormGroup) {
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
    this.submitted = true;
    console.log('this.form',this.form)
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
      this.f['projectResponsable'] && this.f['projectResponsable'].value ? +this.f['projectResponsable'].value : 0,
      []
    )
    console.log(dto);
    this.genericsService.postPromiseResource(`${AppConstants.URL_PROJETS}`, dto)
      .then((res: any) => {
      console.log(res)
      this.getListProjets('','','');
      this.projectDialog = false;
        this.genericsService.confirmResponseAPI(res.message, 'success', +`${AppConstants.DEFAULT_DURATION_MODAL}`,'top-end');
        this.project = {};
     this.ref.close();
    }).catch((err) => {
      console.log(err);
    })
  
  }
    
}
