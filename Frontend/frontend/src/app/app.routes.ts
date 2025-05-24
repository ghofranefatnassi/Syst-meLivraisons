import { Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { ClientListComponent } from './features/clients/client-list/client-list.component';
import { PaimentListComponent } from './features/paiment/paiment-list/paiment-list.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'commandes', 
    pathMatch: 'full' 
  },
  { 
    path: 'commandes',
    loadComponent: () => import('./features/commandes/commande-list/commande-list.component')
      .then(m => m.CommandeListComponent),
    providers: [provideClientHydration()]
  },
  { 
    path: 'commandes/:id',
    loadComponent: () => import('./features/commandes/commande-details/commande-details.component')
      .then(m => m.CommandeDetailsComponent),
    children: [
      {
        path: 'lignes',
        loadComponent: () => import('./features/ligne-commande/ligne-commande-list/ligne-commande-list.component')
          .then(m => m.LigneCommandeListComponent)
      }
    ]
  },
  { 
    path: 'clients', 
    component: ClientListComponent 
  },
  { 
    path: 'produits',
    loadComponent: () => import('./features/produits/produit-list/produit-list.component')
      .then(m => m.ProduitListComponent)
  },
  { 
    path: 'paiments',
    component: PaimentListComponent,
    providers: [provideClientHydration()]
  },
  { 
    path: 'livraisons',
    loadComponent: () => import('./features/livraison/livraison-list/livraison-list.component')
      .then(m => m.LivraisonListComponent)
  },
  { 
    path: 'transporteurs',
    loadComponent: () => import('./features/transporteur/transporteur-list/transporteur-list.component')
      .then(m => m.TransporteurListComponent)
  },
  { 
    path: '**',
    redirectTo: 'commandes'
  }
];