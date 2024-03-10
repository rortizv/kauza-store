import { CommonModule, CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@shared/models/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, SlicePipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public product = input.required<Product>();
  @Output() addtoCartEvent = new EventEmitter<Product>();

  constructor() { }

  onAddtoCart(): void {
    this.addtoCartEvent.emit(this.product());
  }
}
