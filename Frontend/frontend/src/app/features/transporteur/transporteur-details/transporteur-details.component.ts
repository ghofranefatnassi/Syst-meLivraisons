import { Component, OnInit } from '@angular/core';
import { Transporteur } from '../models/transporteur.model';
import { TransporteurService } from '../service/transporteur.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transporteur-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transporteur-details.component.html',
  styleUrls: ['./transporteur-details.component.css']
})
export class TransporteurDetailsComponent implements OnInit {
  transporteur?: Transporteur;
  isLoading = true;

  constructor(
    private transporteurService: TransporteurService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.loadTransporteur(id);
    }
  }

  loadTransporteur(id: number): void {
    this.transporteurService.getById(id).subscribe({
      next: (data) => {
        this.transporteur = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.toastr.error('Failed to load transporteur details');
        this.isLoading = false;
        console.error(err);
        this.router.navigate(['/transporteurs']);
      }
    });
  }
}