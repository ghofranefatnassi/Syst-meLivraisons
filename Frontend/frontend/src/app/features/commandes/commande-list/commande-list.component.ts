import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../service/commande.service';
import { Commande } from '../models/commande.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-commande-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
  commandes: Commande[] = [];
  isLoading = true;

  constructor(private commandeService: CommandeService) {}

  ngOnInit(): void {
    this.loadCommandes();
  }

  loadCommandes(): void {
    this.commandeService.getAll().subscribe({
      next: (data: Commande[]) => {
        this.commandes = data;
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error loading commandes:', err.message);
        this.isLoading = false;
        alert('Error loading commandes: ' + err.message);
      }
    });
  }

  deleteCommande(id: number): void {
    if (confirm('Are you sure you want to delete this commande?')) {
      this.commandeService.delete(id).subscribe({
        next: () => {
          this.commandes = this.commandes.filter(c => c.id !== id);
          alert('Commande deleted successfully');
        },
        error: (err: HttpErrorResponse) => {
          console.error('Error deleting commande:', err.message);
          alert('Error deleting commande: ' + err.message);
        }
      });
    }
  }
}