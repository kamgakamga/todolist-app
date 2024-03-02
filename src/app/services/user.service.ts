import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import {Utilisateur} from '../models/dtos/responses/utilisateur.js';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:9191/toDoList/v1';
  constructor(private httpClient: HttpClient) {}

  // service de recupration de la liste des utilisateur
  getAllUser(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(`${this.baseUrl + '/users'}`);
  }
}
