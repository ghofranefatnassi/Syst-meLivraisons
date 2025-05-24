import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LigneCommandeListComponent } from './ligne-commande-list/ligne-commande-list.component';
import { LigneCommandeFormComponent } from './ligne-commande-form/ligne-commande-form.component';

const routes: Routes = [
  {
    path: 'commande/:commandeId',
    component: LigneCommandeListComponent,
    children: [
      { path: 'new', component: LigneCommandeFormComponent },
      { path: ':id/edit', component: LigneCommandeFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LigneCommandeRoutingModule { }