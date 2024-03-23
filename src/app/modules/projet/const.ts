import { AppConstants } from "src/app/app-constante";

export class Columns {
        public static COLUMNS = [
          {field: 'nomProjet', header: 'NOM_PROJET' , default: true, type: AppConstants.TYPE_STRING},
          {field: 'description', header: 'DESCRIPTION', default: false, type: AppConstants.TYPE_STRING},
          {field: 'responsable', header: 'RESPONSABLE', default: true, type: AppConstants.TYPE_OBJECT},
          {field: 'dateDebut', header: 'DATE_DEBUT', default: true, type: AppConstants.TYPE_DATE},
          {field: 'dateFin', header: 'DATE_FIN', default: true, type: AppConstants.TYPE_DATE}
        ]
      }

export const ID_ETAT_IMPRIMABLE = 1;
export const IS_EXPORT = false;
export const SORT_COLOMN = 'id';
export const ASC = 'ASC';
export const EMPTY_STRING = '';