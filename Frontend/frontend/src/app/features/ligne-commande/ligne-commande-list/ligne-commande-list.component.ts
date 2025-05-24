import { Component, Input, OnInit } from '@angular/core';
import { LigneCommande } from '../models/ligne-commande.model';
import { LigneCommandeService } from '../service/ligne-commande.service';
import { ProduitService } from '../../produits/service/produit.service';
import { Produit } from '../../produits/models/produit.model';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Commande } from '../../commandes/models/commande.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ligne-commande-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ligne-commande-list.component.html',
  styleUrls: ['./ligne-commande-list.component.css']
})
export class LigneCommandeListComponent implements OnInit {
  @Input() commandeId!: number;
  lignesCommande: LigneCommande[] = [];
  produits: Produit[] = [];
  isLoading = true;
  showAddForm = false;
  newLigneCommande: Partial<LigneCommande> = {
    quantite: 1,
    prixUnitaire: 0
  };

  constructor(
    private ligneCommandeService: LigneCommandeService,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    this.loadLignesCommande();
    this.loadProduits();
  }

  loadLignesCommande(): void {
    this.ligneCommandeService.getByCommande(this.commandeId).subscribe({
      next: (data: LigneCommande[]) => {
        this.lignesCommande = data;
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error loading lignes commande:', err.message);
        this.isLoading = false;
      }
    });
  }

  loadProduits(): void {
    this.produitService.getAll().subscribe({
      next: (data: Produit[]) => {
        this.produits = data;
      }
    });
  }

  onProduitChange(produitId: number): void {
    const produit = this.produits.find(p => p.id === produitId);
    if (produit) {
      this.newLigneCommande.prixUnitaire = produit.prix;
      this.newLigneCommande.produit = produit;
    }
  }

  addLigneCommande(): void {
    if (!this.newLigneCommande.produit || !this.newLigneCommande.quantite) return;

    const ligneCommande: LigneCommande = {
      commande: { id: this.commandeId } as Commande,
      produit: this.newLigneCommande.produit,
      quantite: this.newLigneCommande.quantite,
      prixUnitaire: this.newLigneCommande.prixUnitaire || 0
    };

    this.ligneCommandeService.create(ligneCommande).subscribe({
      next: (data: LigneCommande) => {
        this.lignesCommande.push(data);
        this.resetForm();
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error adding ligne commande:', err.message);
      }
    });
  }

  deleteLigneCommande(id: number): void {
    if (confirm('Delete this item?')) {
      this.ligneCommandeService.delete(id).subscribe({
        next: () => {
          this.lignesCommande = this.lignesCommande.filter(l => l.id !== id);
        },
        error: (err: HttpErrorResponse) => {
          console.error('Error deleting ligne commande:', err.message);
        }
      });
    }
  }

  private resetForm(): void {
    this.newLigneCommande = {
      quantite: 1,
      prixUnitaire: 0
    };
    this.showAddForm = false;
  }

  calculateTotal(): number {
    return this.lignesCommande.reduce(
      (sum, ligne) => sum + (ligne.quantite * ligne.prixUnitaire),
      0
    );
  }
}