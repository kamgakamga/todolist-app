import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {EtatTache} from '../models/dtos/requests/etat-tache';
import {AppConstants} from '../app-constante';
import { Projet } from '../models/dtos/responses/projet';


@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private httpClient: HttpClient) {}

  getProjetList(): Observable<any> {
    return this.httpClient.get<any>(`${AppConstants.API_BASE_URL}projets`)
      .pipe(
        tap((response: any) => console.log(response))
      );
  }
  
  getProjetById(projectId: number): Observable<Projet> {
    return this.httpClient.get<Projet>(`http://localhost:9191/toDoList/v1/detail/projet/${projectId}`);
  }
   

  // tslint:disable-next-line:ban-types
  createProjet(projet: Projet): Observable<Object> {
    return this.httpClient.post(`${AppConstants.API_BASE_URL + '/save/project'}`, projet);
  }


  /*
     SERVICERESERBVER AUX ETATS TACHES
   */

  getEtatTacheList(): Observable<EtatTache[]> {
    return this.httpClient.get<EtatTache[]>(`${AppConstants.API_BASE_URL + '/all/etat-tache'}`);
  }

  createEtatTache(etatTache: EtatTache): Observable<any> {
    return this.httpClient.post(`${AppConstants.API_BASE_URL + '/save/etat'}`, etatTache);
  }

}
