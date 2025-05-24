import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livraison, NewLivraison } from '../models/livraison.model';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  private readonly basePath = '/api/livraisons';

  constructor(private apiService: ApiService) { }

  getByCommande(commandeId: number): Observable<Livraison> {
    return this.apiService.get<Livraison>(`${this.basePath}/commande/${commandeId}`);
  }

  scheduleLivraison(livraison: NewLivraison): Observable<Livraison> {
    return this.apiService.post<Livraison>(this.basePath, livraison);
  }
  createNewLivraison(newLivraison: NewLivraison): Observable<Livraison> {
  return this.apiService.post<Livraison>(`${this.basePath}/livraisons`, newLivraison);
}

  updateStatus(id: number, newStatus: string): Observable<Livraison> {
    return this.apiService.put<Livraison>(
      `${this.basePath}/${id}/status`,
      null,
      { newStatus }
    );
  }
}