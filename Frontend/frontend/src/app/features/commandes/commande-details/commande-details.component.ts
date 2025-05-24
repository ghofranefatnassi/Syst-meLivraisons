import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
//import { LivraisonDetailsComponent } from '../../livraison/livraison-details/livraison-details.component';
//import { LivraisonFormComponent } from '../../livraison/livraison-form/livraison-form.component';
import { CommandeService } from '../service/commande.service';
import { PaimentService } from '../../paiment/service/paiment.service';
import { LivraisonService } from '../../livraison/service/livraison.service';
import { Commande } from '../models/commande.model';
import { Paiment ,NewPaiment  } from '../../paiment/models/paiment.model';
import { Livraison } from '../../livraison/models/livraison.model';
import { NewLivraison } from '../../livraison/models/livraison.model';
import { PaimentFormComponent } from '../../paiment/paiment-form/paiment-form.component';

@Component({
  selector: 'app-commande-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    PaimentFormComponent,
    //LivraisonDetailsComponent,
    //LivraisonFormComponent
  ],
  templateUrl: './commande-details.component.html',
  styleUrls: ['./commande-details.component.css']
})
export class CommandeDetailsComponent implements OnInit {
  commande: Commande | null = null;
  paiment: Paiment | null = null;
  livraison: Livraison | null = null;
  isLoading = true;
  showPaymentForm = false;
  showDeliveryForm = false;
  statusOptions = ['EN_PREPARATION', 'EN_ROUTE', 'LIVREE', 'ANNULEE'];

  constructor(
    private commandeService: CommandeService,
    private PaimentService: PaimentService,
    private livraisonService: LivraisonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCommandeDetails();
  }

  loadCommandeDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true;
    
    this.commandeService.getById(id).subscribe({
      next: (commande: Commande) => {
        this.commande = commande;
        this.loadPayment();
        this.loadDelivery();
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error loading commande:', err.message);
        this.isLoading = false;
        this.router.navigate(['/commandes']);
      }
    });
  }

  loadPayment(): void {
    if (this.commande?.id) {
      this.PaimentService.getByCommande(this.commande.id).subscribe({
        next: (Paiment: Paiment) => this.paiment = Paiment,
        error: (err: HttpErrorResponse) => {
          console.error('Error loading payment:', err.message);
          this.paiment = null;
        }
      });
    }
  }

  loadDelivery(): void {
    if (this.commande?.id) {
      this.livraisonService.getByCommande(this.commande.id).subscribe({
        next: (livraison: Livraison) => this.livraison = livraison,
        error: (err: HttpErrorResponse) => {
          console.error('Error loading delivery:', err.message);
          this.livraison = null;
        }
      });
    }
  }

  onPaymentSubmit(NewPaiment: NewPaiment): void {
  if (this.commande?.id) {
    this.PaimentService.createNewPaiment(NewPaiment).subscribe({
      next: (Paiment: Paiment) => {
        this.paiment = Paiment;
        this.showPaymentForm = false;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Payment error:', err.message);
      }
    });
  }
  }

  processRefund(): void {
    if (this.paiment?.id && confirm('Are you sure you want to process a refund?')) {
      this.PaimentService.processRefund(this.paiment.id).subscribe({
        next: (updatedPaiment: Paiment) => this.paiment = updatedPaiment,
        error: (err: HttpErrorResponse) => {
          console.error('Refund error:', err.message);
        }
      });
    }
  }

  updatePaymentStatus(newStatus: string): void {
    if (this.paiment?.id) {
      this.PaimentService.updateStatus(this.paiment.id, newStatus).subscribe({
        next: (updatedPaiment: Paiment) => this.paiment = updatedPaiment,
        error: (err: HttpErrorResponse) => {
          console.error('Status update error:', err.message);
        }
      });
    }
  }

  updateDeliveryStatus(newStatus: string): void {
    if (this.livraison?.id) {
      this.livraisonService.updateStatus(this.livraison.id, newStatus).subscribe({
        next: (updatedLivraison: Livraison) => this.livraison = updatedLivraison,
        error: (err: HttpErrorResponse) => {
          console.error('Delivery status update error:', err.message);
        }
      });
    }
  }

  onDeliverySubmit(newLivraison: NewLivraison): void {
    if (this.commande?.id) {
      newLivraison.commandeId = this.commande.id;
      this.livraisonService.createNewLivraison(newLivraison).subscribe({
        next: (livraison: Livraison) => {
          this.livraison = livraison;
          this.showDeliveryForm = false;
        },
        error: (err: HttpErrorResponse) => {
          console.error('Delivery creation error:', err.message);
        }
      });
    }
  }
}