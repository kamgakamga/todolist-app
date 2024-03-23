import {environment} from 'src/environments/environment';

export class AppConstants {
  /**
   * Constantes globals de l'applicat
   * 
   */
  public static API_BASE_URL = environment.api_base_url;
  public static TOKEN_HEADER_KEY = 'Authorization';
  public static PAGE_SIZE = 10;
  public static DEFAULT_PAGE = 0;
  public static TOTAL_PAGE_DEFAULT = 0;
  public static DEFAULT_DURATION_MODAL = 5000;
  public static EXCEL_EXTENSION = '.xlsx';
  public static OLD_EXCEL_EXTENSION = '.xls';
  public  static PDF_EXTENSION = '.pdf';
  public static EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  public static PDF_TYPE = 'application/pdf';
  public static OTHER_TYPE = 'application/octet-stream';
  public static TYPE_DATE = 'date';
  public static TYPE_DATE_TIME = 'datetime';
  public static TYPE_NUMBER = 'number';
  public static TYPE_BOOLEAN = 'boolean';
  public static TYPE_STRING = 'string';
  public static TYPE_OBJECT = 'object';
  public static FORMAT_DATE = 'dd-MM-yyyy';
  public static FORMAT_DATE_TIME = 'yyyy-MM-dd HH:mm';


  // SECTION DES URL DE L'URL

  public static URL_PROJETS = 'projets';
  public static GET_LIST_UTILISATEURS = 'users';
  public static URL_IMPRESSION = 'systeme/etat/imprimer';
  static EXT_RTF: any;
}