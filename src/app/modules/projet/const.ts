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