import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'new', component: ClientFormComponent },
  { path: ':id', component: ClientDetailsComponent },
  { path: ':id/edit', component: ClientFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }