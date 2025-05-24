import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paiment , NewPaiment } from '../models/paiment.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaimentService {
  private apiUrl = `${environment.apiUrl}/api/Paiments`;

  constructor(private http: HttpClient) {}
 createNewPaiment(Paiment: NewPaiment): Observable<Paiment> {
  // Add default values for new payments
  const completePaiment = {
    ...Paiment,
    statut: Paiment.statut || 'EN_ATTENTE', // Default status
    datePaiment: new Date() // Current date
  };
  return this.http.post<Paiment>(this.apiUrl, completePaiment);
}
  // Get all payments
  getAll(): Observable<Paiment[]> {
    return this.http.get<Paiment[]>(this.apiUrl);
  }

  // Get payment by commande ID
  getByCommande(commandeId: number): Observable<Paiment> {
    return this.http.get<Paiment>(`${this.apiUrl}/commande/${commandeId}`);
  }

  // Create new payment
  create(Paiment: Paiment): Observable<Paiment> {
    return this.http.post<Paiment>(this.apiUrl, Paiment);
  }

  // Delete payment
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Update payment status
  updateStatus(id: number, newStatus: string): Observable<Paiment> {
    return this.http.put<Paiment>(`${this.apiUrl}/${id}/status`, null, {
      params: { newStatus }
    });
  }

  // Process refund
  processRefund(id: number): Observable<Paiment> {
    return this.http.post<Paiment>(`${this.apiUrl}/${id}/refund`, null);
  }

}