import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from 'environments/environment.development';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Signal with products list
  public products = signal<any[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endpoint = environment.apiURL;

  constructor() {
    this.getProducts();
  }

  public getProducts(): void {
    this._http.get<any[]>(`${this._endpoint}?sort=desc`)
      .pipe(tap((data: any[]) => this.products.set(data)))
      .subscribe();
      console.log("PRODUCTS", this.products);
  }

  public getProductById(id: number) {
    return this._http.get<any[]>(`${this._endpoint}/${id}`);
  }

}
