import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface NewLivraison {
  commandeId: number;
  dateLivraisonPrevue: Date;
  transporteur: string;
  statut: string;
}

interface LivraisonFormModel {
  commandeId: number;
  dateLivraisonPrevue: string;
  transporteur: string;
  statut: string;
}

@Component({
  selector: 'app-livraison-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livraison-form.component.html',
  styleUrls: ['./livraison-form.component.css']
})
export class LivraisonFormComponent implements OnInit {
  @Input() commandeId!: number;
  @Output() submitLivraison = new EventEmitter<NewLivraison>();

  formModel: LivraisonFormModel = {
    commandeId: 0,
    dateLivraisonPrevue: '',
    transporteur: '',
    statut: 'EN_PREPARATION'
  };

  statusOptions = ['EN_PREPARATION', 'EN_COURS', 'LIVREE', 'ANNULEE'];

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    const now = new Date();
    // Convert to local datetime string in format YYYY-MM-DDTHH:MM
    const offset = now.getTimezoneOffset() * 60000;
    const localDate = new Date(now.getTime() - offset);
    this.formModel = {
      ...this.formModel,
      commandeId: this.commandeId,
      dateLivraisonPrevue: localDate.toISOString().slice(0, 16)
    };
  }

  onSubmit() {
    if (!this.validateForm()) return;

    const newLivraison: NewLivraison = {
      commandeId: this.commandeId,
      dateLivraisonPrevue: new Date(this.formModel.dateLivraisonPrevue),
      transporteur: this.formModel.transporteur,
      statut: this.formModel.statut
    };
    this.submitLivraison.emit(newLivraison);
  }

  private validateForm(): boolean {
    return !!this.formModel.dateLivraisonPrevue && 
           !!this.formModel.statut;
  }
}