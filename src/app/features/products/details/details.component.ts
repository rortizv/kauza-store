import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, Signal, inject, input } from '@angular/core';
import { Product } from '@shared/models/product.interface';
import { HeaderComponent } from 'app/layout/header/header.component';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HeaderComponent, CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export default class DetailsComponent implements OnInit {
  //@Input({alias: 'id'}) productId!: number; // With the old Input decorator
  productId = input<number>(0, {alias: 'id'});
  product!: Signal<Product | undefined>;
  @Output() addtoCartEvent = new EventEmitter<Product>();

  private readonly productsService = inject(ProductsService);

  ngOnInit(): void {
    this.product = this.productsService.getProductById(this.productId());
  }

  onAddtoCart(): void {
    this.addtoCartEvent.emit(this.product());
  }

}
