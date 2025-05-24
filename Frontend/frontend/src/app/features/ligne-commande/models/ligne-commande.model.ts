import { Commande } from '../../commandes/models/commande.model';
import { Produit } from '../../produits/models/produit.model';

export interface LigneCommande {
  id?: number;
  commande: Commande;
  produit: Produit;
  quantite: number;
  prixUnitaire: number;
}