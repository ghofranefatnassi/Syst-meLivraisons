import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeListComponent } from './commande-list/commande-list.component';
import { CommandeDetailsComponent } from './commande-details/commande-details.component';
import { CommandeFormComponent } from './commande-form/commande-form.component';

const routes: Routes = [
  { path: '', component: CommandeListComponent },
  { path: 'new', component: CommandeFormComponent },
  { 
    path: ':id', 
    component: CommandeDetailsComponent,
    children: [
      { 
        path: 'lignes', 
        loadChildren: () => import('../ligne-commande/ligne-commande.module').then(m => m.LigneCommandeModule)
      }
    ]
  },
  { path: ':id/edit', component: CommandeFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesRoutingModule { }