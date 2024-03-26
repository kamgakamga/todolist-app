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
      // items: [
      //   {
      //     routerLink: 'new',
      //     icon: 'pi pi-fw pi-plus',
      //     label: translate.instant('New'),
      //     routerLinkActiveOptions: { exact: true },
      //     state: {
      //       roles: [],
      //       permissions: []
      //     },
      //     items: [

      //       {
      //         routerLink: 'Bookmark',
      //         icon: 'pi pi-fw pi-bookmark',
      //         label: translate.instant('Bookmark'),
      //         routerLinkActiveOptions: { exact: true },
      //         state: {
      //           roles: [],
      //           permissions: []
      //         },
      //         items: [

      //           {
      //             routerLink: 'Bookmark',
      //             icon: 'pi pi-fw pi-bookmark',
      //             label: translate.instant('Bookmark'),
      //             routerLinkActiveOptions: { exact: true },
      //             state: {
      //               roles: [],
      //               permissions: []
      //             },
      //           },
      //           {
      //             routerLink: 'Video',
      //             icon: 'pi pi-fw pi-video',
      //             label: translate.instant('Video'),
      //             routerLinkActiveOptions: { exact: true },
      //             state: {
      //               roles: [],
      //               permissions: []
      //             },
      //           },

      //         ]
      //       },
      //       {
      //         routerLink: 'Video',
      //         icon: 'pi pi-fw pi-video',
      //         label: translate.instant('Video'),
      //         routerLinkActiveOptions: { exact: true },
      //         state: {
      //           roles: [],
      //           permissions: []
      //         },
      //       },

      //     ]
      //   },
      //   {
      //     routerLink: 'Delete',
      //     icon: 'pi pi-fw pi-trash',
      //     label: translate.instant('Delete'),
      //     routerLinkActiveOptions: { exact: true },
      //     state: {
      //       roles: [],
      //       permissions: []
      //     }
      //   },
      //   {
      //     routerLink: 'Delete1',
      //     icon: 'pi pi-fw pi-trash',
      //     label: translate.instant('Delete1'),
      //     routerLinkActiveOptions: { exact: true },
      //     state: {
      //       roles: [],
      //       permissions: []
      //     }
      //   },
      //   {
      //     separator: true
      //   },
      //   {
      //     routerLink: 'Export',
      //     icon: 'pi pi-fw pi-external-link',
      //     label: translate.instant('Export'),
      //     routerLinkActiveOptions: { exact: true },
      //     state: {
      //       roles: [],
      //       permissions: []
      //     }
      //   }
      // ]
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
          routerLink: 'projets',
          icon: 'pi pi-fw pi-file',
          label: translate.instant('Projets'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          }
        }
      ]
    },
    {
      label: translate.instant('PARAMETRAGES'),
      // icon: 'pi pi-fw pi-file',
      routerLinkActiveOptions: { exact: true },
      state: {
        roles: [],
        permissions: []
      },
      items: [
        {
          routerLink: '/projets',
          icon: 'pi pi-fw pi-user',
          label: translate.instant('PROJETS'),
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
          routerLink: 'sprints',
          icon: 'pi pi-fw pi-list',
          label: translate.instant('SPRINTS'),
          routerLinkActiveOptions: { exact: true },
          state: {
            roles: [],
            permissions: []
          },
        },
      ]
    }
  ];
};
