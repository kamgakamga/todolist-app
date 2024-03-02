import { Component, OnInit } from '@angular/core';
import { I18NMENUS } from './menu';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menuItems: MenuItem[] = [];
  constructor(
    private readonly router: Router,
    public translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.initialiseSidebarMenus();
  }

  public initialiseSidebarMenus(): void {
    this.menuItems = [];
    I18NMENUS(this.translateService).forEach((m) => {
      this.menuItems.push(m);
      // console.log(this.menuItems)
    });
  }
  public closeWindow() {}
  public minimizeWindow() {}
  public hideWindow() {}
}
