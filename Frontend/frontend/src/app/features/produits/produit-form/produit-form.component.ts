import { Component } from '@angular/core';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../service/produit.service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.css']
})
export class ProduitFormComponent {
  produit: Produit = {
    nom: '',
    stock: 0,
    prix: 0
  };
  isEditMode = false;

  constructor(
    private produitService: ProduitService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.loadProduit(id);
    }
  }

  loadProduit(id: number) {
    this.produitService.getById(id).subscribe({
      next: (data) => this.produit = data
    });
  }

  onSubmit() {
    const operation = this.isEditMode
      ? this.produitService.update(this.produit.id!, this.produit)
      : this.produitService.create(this.produit);

    operation.subscribe({
      next: () => this.router.navigate(['/produits']),
      error: (err) => console.error(err)
    });
  }
}