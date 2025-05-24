import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Transporteur } from '../models/transporteur.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransporteurService {
  private endpoint = '/transporteurs';

  constructor(private api: ApiService) { }

  // Add all missing methods
  getById(id: number): Observable<Transporteur> {
    return this.api.get<Transporteur>(`${this.endpoint}/${id}`);
  }

  update(id: number, transporteur: Transporteur): Observable<Transporteur> {
    return this.api.put<Transporteur>(`${this.endpoint}/${id}`, transporteur);
  }

  // Keep existing methods
  getAll(): Observable<Transporteur[]> {
    return this.api.get<Transporteur[]>(this.endpoint);
  }

  create(transporteur: Transporteur): Observable<Transporteur> {
    return this.api.post<Transporteur>(this.endpoint, transporteur);
  }

  delete(id: number): Observable<void> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }
}