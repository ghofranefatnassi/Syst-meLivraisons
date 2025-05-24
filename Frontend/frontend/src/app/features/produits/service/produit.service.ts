import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Produit } from '../models/produit.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private endpoint = '/produits';

  constructor(private api: ApiService) { }

  getAll() {
    return this.api.get<Produit[]>(this.endpoint);
  }

  getById(id: number) {
    return this.api.get<Produit>(`${this.endpoint}/${id}`);
  }

  create(produit: Produit) {
    return this.api.post<Produit>(this.endpoint, produit);
  }

  update(id: number, produit: Produit) {
    return this.api.put<Produit>(`${this.endpoint}/${id}`, produit);
  }

  delete(id: number) {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }

  getByMinStock(minStock: number) {
    return this.api.get<Produit[]>(`${this.endpoint}/stock/${minStock}`);
  }

  updateStock(id: number, quantity: number) {
    // Corrected - pass params as query string
    return this.api.put<Produit>(
      `${this.endpoint}/${id}/stock?quantity=${quantity}`,
      {}
    );
  }

  search(nom?: string, minPrix?: number, maxPrix?: number) {
    // Corrected - build query params properly
    let params = new HttpParams();
    if (nom) params = params.append('nom', nom);
    if (minPrix) params = params.append('minPrix', minPrix.toString());
    if (maxPrix) params = params.append('maxPrix', maxPrix.toString());
    
    return this.api.get<Produit[]>(`${this.endpoint}/search`, { params });
  }
}