import {MenuItem} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';

export const I18NMENUS = (translate: any): MenuItem[] => {
  return [
    {
      id: '1',
      label: translate.instant('PARAMETRAGES'),
      routerLink: ['/projets'],
      routerLinkActiveOptions: { exact: true },
      // queryParams: { type: 'parametrages' },
      state: {
        roles: [],
        permissions: []
      },
      items: [
        {
          id: '1',
          // icon: 'pi pi-list',
          label: translate.instant('PROJETS'),
          routerLink: ['/projets'],
          queryParams: { type: 'projets' },
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          },
        },
        {
          id: '2',
          // icon: 'pi pi-list',
          label: translate.instant('SPRINTS'),
          queryParams: { type: 'sprints' },
          routerLink: ['/sprints'],
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          }
        },
        {
          id: '3',
          // icon: 'pi pi-fw pi-list',
          label: translate.instant('TACHES'),
          queryParams: { type: 'taches' },
          routerLink: ['/parametrages'],
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          }
        },
        {
          id: '4',
          // icon: 'pi pi-fw pi-list',
          label: translate.instant('UTILISATEURS'),
          queryParams: { type: 'utilisateurs' },
          routerLink: ['/parametrages'],
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          }
        } 
      ]
    },
    {
      id: '2',
      label: translate.instant('GESTION_PROJETS'),
      routerLink: ['/sidebar-menu'],
      routerLinkActiveOptions: { exact: true },
      queryParams: { type: 'gestion-projets' },
      state: {
        roles: [],
        permissions: []
      }
    },
    {
      id: '3',
      label: translate.instant('GESTION_SPRINTS'),
      routerLink: ['/sidebar-menu'],
      routerLinkActiveOptions: { exact: true },
      queryParams: { type: 'gestion-sprints' },
      state: {
        roles: [],
        permissions: []
      }
    },
    {
      id: '4',
      label: translate.instant('GESTION_TACHES'),
      routerLink: ['/sidebar-menu'],
      routerLinkActiveOptions: { exact: true },
      queryParams: { type: 'gestion-taches' },
      state: {
        roles: [],
        permissions: []
      }
    },
    {
      id: '5',
      label: translate.instant('GESTION_UTILISATEURS'),
      routerLink: ['/projets'],
      routerLinkActiveOptions: { exact: true },
      queryParams: { type: 'gestion-utilisateurs' },
      state: {
        roles: [],
        permissions: []
      }
    }
  ];
};
