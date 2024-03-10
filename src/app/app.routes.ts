import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component')
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.routes')
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.component')
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' }, // change to home
  { path: '**', redirectTo: 'products', pathMatch: 'full' } // change to home
];
