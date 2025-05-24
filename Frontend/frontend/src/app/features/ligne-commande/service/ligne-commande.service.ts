import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { LigneCommande } from '../models/ligne-commande.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {
  private endpoint = '/lignes-commande';

  constructor(private api: ApiService) { }

  getByCommande(commandeId: number): Observable<LigneCommande[]> {
    return this.api.get<LigneCommande[]>(`${this.endpoint}/commande/${commandeId}`);
  }

  create(ligneCommande: LigneCommande): Observable<LigneCommande> {
    return this.api.post<LigneCommande>(this.endpoint, ligneCommande);
  }

  update(id: number, ligneCommande: LigneCommande): Observable<LigneCommande> {
    return this.api.put<LigneCommande>(`${this.endpoint}/${id}`, ligneCommande);
  }

  delete(id: number): Observable<void> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }
}