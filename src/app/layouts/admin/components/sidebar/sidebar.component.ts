import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { I18NMENUS } from './sidebar-menu-config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items!: any[];
  @ViewChild('panelMenu') panelMenu!: ElementRef;
  public menuItems!: MenuItem[];
  type: any;
  menuSelectionneIndex: any;
  activeIndex: any;

  constructor(
    public translateService: TranslateService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activeIndex = 0;
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.type = params['type'];
      console.log(this.type);
    })
    this.initialiseSidebarMenus();
  }

  public initialiseSidebarMenus(): void {
    this.menuItems = I18NMENUS(this.translateService);
  }

  onMenuSelect(event : any) {
    const clickedItem: MenuItem = event.item;
    console.log('Élément cliqué :', clickedItem);

  }
}
