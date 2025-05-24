import { Commande } from '../../commandes/models/commande.model';

export interface Livraison {
  id: number;
  commande: Commande;
  dateLivraisonPrevue: Date;
  dateLivraisonReelle?: Date;
  statut: string; 
  transporteur?: string;
  noteTransporteur?: number;
}

export interface NewLivraison {
  commandeId: number;
  dateLivraisonPrevue: Date;
  transporteur?: string;
}