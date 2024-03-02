import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EtatTache } from 'src/app/models/dtos/requests/etat-tache';
import { Projet } from 'src/app/models/dtos/requests/projet';
import { Utilisateur } from 'src/app/models/dtos/responses/utilisateur';
import { ProjetService } from 'src/app/services/projet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-projet',
  templateUrl: './edit-projet.component.html',
  styleUrls: ['./edit-projet.component.scss']
})
export class EditProjetComponent implements OnInit {

  projetForm!: FormGroup;
  projetPreview$ !: Observable<Projet>;
  utilisateurs!: Utilisateur[];
  private etatTaches!: EtatTache[];

  constructor(private projetService: ProjetService,
              private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.initProjet();
    this.projetPreview$ = this.projetForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue
      }))
    );

    console.log(this.getUtilisateur());
    console.log(this.getEtatTache());
  }
  goToProjectList() {
     this.router.navigateByUrl('/projets');
  }


  onCreateProjects(): void    {
    console.log(this.projetForm.value);
    this.projetService.createProjet(this.projetForm.value).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }


  private getUtilisateur() {
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.utilisateurs = data;

    });
  }

  private getEtatTache() {
    this.projetService.getEtatTacheList().subscribe(data => {
      console.log(data);
      this.etatTaches = data;

    });
  }

  private initProjet() {
    this.projetForm = this.formBuilder.group(
      {
        id: 0,
        nomProjet: '',
        description: '',
        dateDebut: '',
        dateFin: '',
        etatId: [],
        responsableId: 0,
        utilisateurs: []
      });
  }


  get f() {
    return this.projetForm.controls;
  }

  public onCreateProject() {
    let dto;
    dto = new Projet (
      0,
      this.f.nomProjet.value,
      this.f.description.value,
      this.f.dateDebut.value,
      this.f.dateFin.value,
      [],
      this.f.responsableId.value,
      [],
    );
    console.log('sending dto :', dto);
    this.projetService.createProjet(dto).subscribe((response: any) => {
      console.log('response save projet', response);
    });
  }
}

