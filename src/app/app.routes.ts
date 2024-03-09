import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.component')
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./features/products/details/details.component')
  },
  {
    path: 'checkout',
    loadChildren: () => import('./features/checkout/checkout.component')
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full' }
];
