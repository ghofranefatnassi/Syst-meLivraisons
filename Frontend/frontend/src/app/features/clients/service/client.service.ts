import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private endpoint = '/clients';

  constructor(private api: ApiService) { }

  getAll(): Observable<Client[]> {
    return this.api.get<Client[]>(this.endpoint);
  }

  getById(id: number): Observable<Client> {
    return this.api.get<Client>(`${this.endpoint}/${id}`);
  }

  create(client: Client): Observable<Client> {
    return this.api.post<Client>(this.endpoint, client);
  }

  update(id: number, client: Client): Observable<Client> {
    return this.api.put<Client>(`${this.endpoint}/${id}`, client);
  }

  delete(id: number): Observable<void> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }
}