import { computed } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Product } from "@shared/models/product.interface";

export interface CartStore {
  products: Product[];
  totalAmount: number;
  productsCount: number;
}

const initialState: CartStore = {
  products: [],
  totalAmount: 0,
  productsCount: 0
}

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ products }) => ({
    productsCount: computed(() => calculateProductCount(products())),
    totalAmount: computed(() => calculateTotalAmount(products())),
  })),
  withMethods(({ products, ...state }) => ({
    addToCart(product: Product) {
      const isProductInCart = products().find((item: Product) => item.id === product.id);
      if (isProductInCart) {
        isProductInCart.quantity ++;
        isProductInCart.subtotal = isProductInCart.quantity * isProductInCart.price;
        patchState(state, { products: [...products()] });
      } else {
        patchState(state, { products: [...products(), product] });
      }
    },
    removeFromCart(id: number) {
      const product = products().filter((product) => product.id === id);
      patchState(state, { products: product });
    },
    clearCart() {
      patchState(state, initialState);
    },
  }))
);

function calculateTotalAmount(products: Product[]): number {
  return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
}

function calculateProductCount(products: Product[]): number {
  return products.reduce((acc, product) => acc + product.quantity, 0);
}

