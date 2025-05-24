import { Component, OnInit } from '@angular/core';
import { Commande } from '../models/commande.model';
import { CommandeService } from '../service/commande.service';
import { ClientService } from '../../clients/service/client.service';
import { Client } from '../../clients/models/client.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-commande-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './commande-form.component.html',
  styleUrls: ['./commande-form.component.css']
})
export class CommandeFormComponent implements OnInit {
  commande: Commande = {
    client: {} as Client,
    date: new Date().toISOString().split('T')[0],
    statut: 'En attente',
    montantTotal: 0
  };
  clients: Client[] = [];
  isEditMode = false;
  isLoading = false;

  constructor(
    private commandeService: CommandeService,
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClients();
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.loadCommande(+id);
    }
  }

  loadClients(): void {
    this.clientService.getAll().subscribe({
      next: (data: Client[]) => this.clients = data
    });
  }

  loadCommande(id: number): void {
    this.isLoading = true;
    this.commandeService.getById(id).subscribe({
      next: (data: Commande) => {
        this.commande = data;
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error loading commande:', err.message);
        this.isLoading = false;
        alert('Error loading commande: ' + err.message);
      }
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    const operation = this.isEditMode
      ? this.commandeService.update(this.commande.id!, this.commande)
      : this.commandeService.create(this.commande);

    operation.subscribe({
      next: () => {
        this.isLoading = false;
        alert(`Commande ${this.isEditMode ? 'updated' : 'created'} successfully`);
        this.router.navigate(['/commandes']);
      },
      error: (err: HttpErrorResponse) => {
        console.error(`Error ${this.isEditMode ? 'updating' : 'creating'} commande:`, err.message);
        this.isLoading = false;
        alert(`Error ${this.isEditMode ? 'updating' : 'creating'} commande: ` + err.message);
      }
    });
  }
}