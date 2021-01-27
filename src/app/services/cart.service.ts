import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products$ = new BehaviorSubject<Product[]>([]);
  
  addToCart(product: Product): void {
    if (this.products$.value.find((cartProduct) => cartProduct.id === product.id)) {
      return;
    }
    
    this.products$.next([...this.products$.value, product]);
  }

  removeFromCart(id: number): void {
    this.products$.next(this.products$.value.filter((product) => product.id !== id))
  }

  clearCart(): void {
    this.products$.next([]);
  }
}
