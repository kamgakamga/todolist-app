import { Component } from '@angular/core';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display: boolean = false;
  title = 'todolist-app';
  birthday!: Date;


  constructor(private languageService: LanguageService){}

  ngOnInit() {
  }

}
