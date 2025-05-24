import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../service/client.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  form!: FormGroup;
  isEditMode = false;
  clientId?: number;
  isLoading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.checkEditMode();
  }

  private initForm(): void {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required]
    });
  }

  private checkEditMode(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.clientId = +params['id'];
        this.loadClient(this.clientId);
      }
    });
  }

  private loadClient(id: number): void {
    this.isLoading = true;
    this.clientService.getById(id).subscribe({
      next: (client) => {
        this.form.patchValue(client);
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load client';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    const client: Client = this.form.value;

    const operation = this.isEditMode && this.clientId
      ? this.clientService.update(this.clientId, client)
      : this.clientService.create(client);

    operation.subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/clients']);
      },
      error: (err) => {
        this.error = this.isEditMode ? 'Failed to update client' : 'Failed to create client';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}