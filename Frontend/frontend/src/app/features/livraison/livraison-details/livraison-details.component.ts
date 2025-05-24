import { Component, Input } from '@angular/core';
import { Livraison } from '../models/livraison.model';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-livraison-details',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './livraison-details.component.html',
  styleUrls: ['./livraison-details.component.css']
})
export class LivraisonDetailsComponent {
  @Input() livraison!: Livraison; // Changed to non-null assertion
  @Input() isLoading = false;
}