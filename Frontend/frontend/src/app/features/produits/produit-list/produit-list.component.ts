import { Component } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import { Produit } from '../models/produit.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produit-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent {
  produits: Produit[] = [];
  isLoading = true;

  constructor(private produitService: ProduitService) {
    this.loadProduits();
  }

  loadProduits() {
    this.produitService.getAll().subscribe({
      next: (data) => {
        this.produits = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  deleteProduit(id: number) {
    if (confirm('Delete this product?')) {
      this.produitService.delete(id).subscribe({
        next: () => this.produits = this.produits.filter(p => p.id !== id)
      });
    }
  }
}