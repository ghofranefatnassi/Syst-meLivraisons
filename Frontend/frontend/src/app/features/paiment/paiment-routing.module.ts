import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaimentDetailsComponent } from './paiment-details/paiment-details.component';
import { PaimentFormComponent } from './Paiment-form/paiment-form.component';

const routes: Routes = [
  { path: 'commande/:commandeId', component: PaimentDetailsComponent },
  { path: 'new', component: PaimentFormComponent },
  { path: ':id/refund', component: PaimentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaimentRoutingModule { }