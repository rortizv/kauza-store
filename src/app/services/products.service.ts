import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable, inject, runInInjectionContext, signal } from '@angular/core';
import { Product } from '@shared/models/product.interface';
import { environment } from 'environments/environment.development';
import { map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Signal with products list
  public products = signal<Product[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endpoint = environment.apiURL;
  private readonly _injector = inject(EnvironmentInjector);

  constructor() {
    this.getProducts();
  }

  public getProducts(): void {
    this._http.get<Product[]>(`${this._endpoint}/products?sort=desc`)
      .pipe(
        map((products: Product[]) => products.map((product: Product) => ({...product, quantity: 1}))),
        tap((products: Product[]) => this.products.set(products)))
      .subscribe()

  }

  public getProductById(id: number) {
    return runInInjectionContext(this._injector, () =>
      toSignal<Product>(this._http.get<Product>(`${this._endpoint}/products/${id}`)
      )
    );
  }

}
