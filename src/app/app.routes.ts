import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./app.component').then(m => m.AppComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.component')
  },
  {
    path: 'product-details/:id',
    loadComponent: () => import('./features/products/details/details.component')
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.component')
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' }, // change to home
  { path: '**', redirectTo: 'products', pathMatch: 'full' } // change to home
];
