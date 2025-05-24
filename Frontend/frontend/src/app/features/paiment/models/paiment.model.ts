import { Commande } from '../../commandes/models/commande.model';

export interface Paiment {
  id: number;
  commande: Commande;  
  montant: number;
  methode: string; 
  statut: string;  
  datePaiment: Date;
}

export interface NewPaiment {
  commandeId: number;
  montant: number;
  methode: string;
  statut?: string;
  datePaiment?: Date;
}
