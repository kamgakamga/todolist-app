import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _keyLanguage: string = 'userLanguage';
  private _supportedLanguages = ['en','fr'];
  private _userLanguage: string = '';



  constructor(private translate : TranslateService, private http: HttpClient) {
    this.initLanguage();
    this.translate.use(this._userLanguage);
   }


   initLanguage() {
    const value = localStorage.getItem(this._keyLanguage);
    if (value != null) {
      this._userLanguage = value;
    } else {
      const browserLanguage = navigator.language.split('-')[0];
      if (this._supportedLanguages.includes(browserLanguage)) {
        this._userLanguage = browserLanguage;
        console.log('Stockage de la langue en cours...');
        localStorage.setItem(this._keyLanguage, browserLanguage);
      }
    }
  }

  setLanguage(language: string){
    console.log('stockage de la lanque en cours...');
       this._userLanguage =language ;
       localStorage.setItem(this._keyLanguage, this._userLanguage);
       this.translate.use(this._userLanguage);
  }

  getLanguage(){
    return this._userLanguage;
  }

  getAvailableLanguages(){
    return this._supportedLanguages;
  }
}
