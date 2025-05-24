import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { PaimentService } from '../service/paiment.service';
import { Paiment } from '../models/paiment.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-paiment-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './paiment-list.component.html',
  styleUrls: ['./paiment-list.component.css']
})
export class PaimentListComponent implements OnInit {
  Paiments: Paiment[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private PaimentService: PaimentService) {}

  ngOnInit(): void {
    this.loadPaiments();
  }

  loadPaiments(): void {
    this.isLoading = true;
    this.PaimentService.getAll().subscribe({
      next: (data: Paiment[]) => {
        this.Paiments = data;
        this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.error = 'Failed to load payments';
        this.isLoading = false;
        console.error(err.message);
      }
    });
  }

  deletePaiment(id: number): void {
    if (confirm('Are you sure you want to delete this payment?')) {
      this.PaimentService.delete(id).subscribe({
        next: () => {
          this.Paiments = this.Paiments.filter(p => p.id !== id);
        },
        error: (err: HttpErrorResponse) => {
          this.error = 'Failed to delete payment';
          console.error(err.message);
        }
      });
    }
  }
}