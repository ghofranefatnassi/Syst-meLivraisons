import { Component, Input } from '@angular/core';
import { Paiment } from '../models/paiment.model';

@Component({
  selector: 'app-Paiment-details',
  templateUrl: './Paiment-details.component.html',
  styleUrls: ['./Paiment-details.component.css']
})
export class PaimentDetailsComponent {
  @Input() Paiment: Paiment | null = null;
}