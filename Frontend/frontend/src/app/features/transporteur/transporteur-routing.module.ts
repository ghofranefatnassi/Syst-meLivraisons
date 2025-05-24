import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransporteurListComponent } from './transporteur-list/transporteur-list.component';
import { TransporteurDetailsComponent } from './transporteur-details/transporteur-details.component';
import { TransporteurFormComponent } from './transporteur-form/transporteur-form.component';

const routes: Routes = [
  { path: '', component: TransporteurListComponent },
  { path: 'new', component: TransporteurFormComponent },
  { path: ':id', component: TransporteurDetailsComponent },
  { path: ':id/edit', component: TransporteurFormComponent },
  { path: 'top-rated', component: TransporteurListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransporteurRoutingModule { }