import { Component, OnInit } from '@angular/core';
import { TransporteurService } from '../service/transporteur.service';
import { Transporteur } from '../models/transporteur.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transporteur-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './transporteur-list.component.html',
  styleUrls: ['./transporteur-list.component.css']
})
export class TransporteurListComponent implements OnInit {
  transporteurs: Transporteur[] = [];
  isLoading = true;

  constructor(
    private transporteurService: TransporteurService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadTransporteurs();
  }

  loadTransporteurs(): void {
    this.transporteurService.getAll().subscribe({
      next: (data) => {
        this.transporteurs = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.toastr.error('Failed to load transporteurs');
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  deleteTransporteur(id: number): void {
    if (confirm('Are you sure you want to delete this transporteur?')) {
      this.transporteurService.delete(id).subscribe({
        next: () => {
          this.transporteurs = this.transporteurs.filter(t => t.id !== id);
          this.toastr.success('Transporteur deleted successfully');
        },
        error: (err) => {
          this.toastr.error('Failed to delete transporteur');
          console.error(err);
        }
      });
    }
  }
}