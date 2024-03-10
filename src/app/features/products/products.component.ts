import { Component, inject } from '@angular/core';
import { FooterComponent } from 'app/layout/footer/footer.component';
import { HeaderComponent } from 'app/layout/header/header.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {
  private readonly productSvc = inject(ProductsService);
  public products = this.productSvc.products;

  constructor() {
    this.productSvc.getProducts();
  }
}
