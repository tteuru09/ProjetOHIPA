import { TypeContrat } from '../annonces.entity';

export class CreateAnnonceDto {
  titre: string;
  entreprise: string;
  ville: string;
  type_contrat: TypeContrat;
  descriptif: string;
}
