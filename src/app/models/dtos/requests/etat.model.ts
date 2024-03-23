export class EtatImprimableModel {
        constructor(
          public idEtat: number,
          public exporter: boolean,
          public paramEtats: ParamEtat[],
          
        ) {}
      }
      
      export class ParamEtat {
        constructor(
          public texte: string,
          public valeur: string
        ) {}
      }