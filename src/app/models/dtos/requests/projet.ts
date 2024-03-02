

export class ProjetRequestDto {
constructor(
  public id: number,
  public nomProjet: string,
  public description: string,
  public dateDebut: Date,
  public dateFin: Date,
  public etatId: [],
  public responsableId: number,
  public utilisateurs: [],
) {
}

}

export interface ProjetListResquest {
   first: number;
   rows :number;
  }