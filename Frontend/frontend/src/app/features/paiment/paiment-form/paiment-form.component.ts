import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewPaiment } from '../models/paiment.model';

@Component({
  selector: 'app-paiment-form',
  templateUrl: './paiment-form.component.html', 
   imports: [CommonModule, FormsModule],
  styleUrls: ['./paiment-form.component.css'] 
})
export class PaimentFormComponent {
  @Input() commandeId!: number;
  @Output() submitPaiment = new EventEmitter<NewPaiment>();

  payment: NewPaiment = {
    commandeId: this.commandeId,
    montant: 0,
    methode: 'CARTE'
  };

  paymentMethods = ['CARTE', 'ESPECES', 'VIREMENT'];
  
  onSubmit() {
    this.payment.commandeId = this.commandeId;
    this.submitPaiment.emit(this.payment);
  }
}