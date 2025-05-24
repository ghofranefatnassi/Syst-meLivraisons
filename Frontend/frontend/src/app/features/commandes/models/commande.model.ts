import { Client } from '../../clients/models/client.model';
import { LigneCommande } from '../../ligne-commande/models/ligne-commande.model';
import { Livraison } from '../../livraison/models/livraison.model';
import { Paiment } from '../../paiment/models/paiment.model';

export interface Commande {
  id: number;
  client: Client;
  date: string; 
  statut: string;
  montantTotal: number;
  lignesCommande?: LigneCommande[];
  livraison?: Livraison;
  Paiment?: Paiment;
}
