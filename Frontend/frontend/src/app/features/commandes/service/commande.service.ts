import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Commande } from '../models/commande.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private endpoint = '/commandes';

  constructor(private api: ApiService) { }

  getAll(): Observable<Commande[]> {
    return this.api.get<Commande[]>(this.endpoint);
  }

  getById(id: number): Observable<Commande> {
    return this.api.get<Commande>(`${this.endpoint}/${id}`);
  }

  getByClient(clientId: number): Observable<Commande[]> {
    return this.api.get<Commande[]>(`${this.endpoint}/client/${clientId}`);
  }

  create(commande: Commande): Observable<Commande> {
    return this.api.post<Commande>(this.endpoint, commande);
  }

  updateStatus(id: number, newStatus: string): Observable<Commande> {
    return this.api.put<Commande>(
      `${this.endpoint}/${id}/status`, 
      {},
      { newStatus }
    );
  }

  update(id: number, commande: Commande): Observable<Commande> {
    return this.api.put<Commande>(`${this.endpoint}/${id}`, commande);
  }

  delete(id: number): Observable<void> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }
}