import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivraisonDetailsComponent } from './livraison-details/livraison-details.component';
import { LivraisonFormComponent } from './livraison-form/livraison-form.component';

const routes: Routes = [
  { path: 'commande/:commandeId', component: LivraisonDetailsComponent },
  { path: 'new', component: LivraisonFormComponent },
  { path: ':id/status', component: LivraisonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivraisonRoutingModule { }