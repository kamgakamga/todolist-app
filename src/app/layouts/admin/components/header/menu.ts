import {MenuItem} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';

export const I18NMENUS = (translate: TranslateService): MenuItem[] => {
  return [
    {
      label: translate.instant('FICHIER'),
      // icon: 'pi pi-fw pi-file',
      routerLinkActiveOptions: { exact: true },
      state: {
        roles: [],
        permissions: []
      },
      items: [
        {
          routerLink: 'new',
          icon: 'pi pi-fw pi-plus',
          label: translate.instant('New'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          },
          items: [

            {
              routerLink: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark',
              label: translate.instant('Bookmark'),
              routerLinkActiveOptions: { exact: true },
              state: {
                roles: [],
                permissions: []
              },
              items: [

                {
                  routerLink: 'Bookmark',
                  icon: 'pi pi-fw pi-bookmark',
                  label: translate.instant('Bookmark'),
                  routerLinkActiveOptions: { exact: true },
                  state: {
                    roles: [],
                    permissions: []
                  },
                },
                {
                  routerLink: 'Video',
                  icon: 'pi pi-fw pi-video',
                  label: translate.instant('Video'),
                  routerLinkActiveOptions: { exact: true },
                  state: {
                    roles: [],
                    permissions: []
                  },
                },

              ]
            },
            {
              routerLink: 'Video',
              icon: 'pi pi-fw pi-video',
              label: translate.instant('Video'),
              routerLinkActiveOptions: { exact: true },
              state: {
                roles: [],
                permissions: []
              },
            },

          ]
        },
        {
          routerLink: 'Delete',
          icon: 'pi pi-fw pi-trash',
          label: translate.instant('Delete'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          }
        },
        {
          routerLink: 'Delete1',
          icon: 'pi pi-fw pi-trash',
          label: translate.instant('Delete1'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          }
        },
        {
          separator: true
        },
        {
          routerLink: 'Export',
          icon: 'pi pi-fw pi-external-link',
          label: translate.instant('Export'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          }
        }
      ]
    },
    {
      label: translate.instant('PROJET'),
      // icon: 'pi pi-fw pi-file',
      routerLinkActiveOptions: { exact: true },
      state: {
        roles: [],
        permissions: []
      },
      items: [
        {
          routerLink: 'Edit',
          icon: 'pi pi-fw pi-file',
          label: translate.instant('Edit'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          },
          items: [

            {
              routerLink: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark',
              label: translate.instant('Bookmark'),
              routerLinkActiveOptions: { exact: true },
              state: {
                roles: [],
                permissions: []
              },
            },

          ]
        }
      ]
    },
    {
      label: translate.instant('LISTES'),
      // icon: 'pi pi-fw pi-file',
      routerLinkActiveOptions: { exact: true },
      state: {
        roles: [],
        permissions: []
      },
      items: [
        {
          routerLink: 'fiche-personnel',
          icon: 'pi pi-fw pi-user',
          label: translate.instant('FICHE_PERSONNEL'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          },
        },
        {
          separator: true
        },
        {
          routerLink: 'constantes',
          icon: 'pi pi-fw pi-list',
          label: translate.instant('CONSTANTES'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          },
        },
        {
          routerLink: 'rubriques',
          icon: 'pi pi-fw pi-list',
          label: translate.instant('RUBRIQUES'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          },
        },
        {
          separator: true
        },
        {
          routerLink: 'gestion-des-tables',
          icon: 'pi pi-fw pi-table',
          label: translate.instant('GESTION_DES_TABLES'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          },
        },
        {
          routerLink: 'organigramme',
          icon: 'pi pi-fw pi-filter',
          label: translate.instant('ORGANIGRAMMES'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          },
        },
        {
          routerLink: 'etablissement-liste',
          icon: 'pi pi-fw pi-table',
          label: translate.instant('ETABLISSEMENT'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          },
        },
        {
          routerLink: 'convention-collective',
          icon: 'pi pi-fw pi-table',
          label: translate.instant('CONVENTION_COLLECTIVE'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          },
        }
      ]
    }
  ];
};
