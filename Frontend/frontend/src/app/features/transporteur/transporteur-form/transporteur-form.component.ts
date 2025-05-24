import { Component, OnInit } from '@angular/core';
import { Transporteur } from '../models/transporteur.model';
import { TransporteurService } from '../service/transporteur.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transporteur-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transporteur-form.component.html',
  styleUrls: ['./transporteur-form.component.css']
})
export class TransporteurFormComponent implements OnInit {
  transporteur: Transporteur = {
    nom: '',
    telephone: '',
    note: 0
  };
  isEditMode = false;
  isLoading = false;

  constructor(
    private transporteurService: TransporteurService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.loadTransporteur(id);
    }
  }

  loadTransporteur(id: number): void {
    this.isLoading = true;
    this.transporteurService.getById(id).subscribe({
      next: (data) => {
        this.transporteur = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.toastr.error('Failed to load transporteur');
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    const operation = this.isEditMode
      ? this.transporteurService.update(this.transporteur.id!, this.transporteur)
      : this.transporteurService.create(this.transporteur);

    operation.subscribe({
      next: () => {
        this.toastr.success(`Transporteur ${this.isEditMode ? 'updated' : 'created'} successfully`);
        this.router.navigate(['/transporteurs']);
      },
      error: (err) => {
        this.toastr.error(`Failed to ${this.isEditMode ? 'update' : 'create'} transporteur`);
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}