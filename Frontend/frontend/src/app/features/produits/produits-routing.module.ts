import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { ProduitFormComponent } from './produit-form/produit-form.component';

const routes: Routes = [
  { path: '', component: ProduitListComponent },
  { path: 'new', component: ProduitFormComponent },
  { path: ':id', component: ProduitDetailsComponent },
  { path: ':id/edit', component: ProduitFormComponent },
  { path: 'stock/:minStock', component: ProduitListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitsRoutingModule { }