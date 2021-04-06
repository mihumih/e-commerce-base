import { TestBed } from '@angular/core/testing';
import { Product } from '../types';
import { CartService } from './cart.service';

const productMock: Product = {
  id: 1,
  image: 'image',
  SKU: 0,
  name: 'test',
  description: 'test',
  price: 10,
};
const productMock2: Product = {
  id: 2,
  image: 'image',
  SKU: 0,
  name: 'test',
  description: 'test',
  price: 10,
};

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  describe('addToCart', () => {
    it('shoud add the product in cart', () => {
      expect(service.products$.value.length).toBe(0);
      service.addToCart(productMock);
      expect(service.products$.value[0]).toEqual(productMock);
    });

    it('should not add a product in cart if product is already added', () => {
      service.addToCart(productMock);
      service.addToCart(productMock);
      expect(service.products$.value.length).toEqual(1);
    });
  });

  describe('removeFromCart', () => {
    it('should remove product from cart', () => {
      // 1. add product in cart
      service.addToCart(productMock);
      // 2. check that product was added to cart
      expect(service.products$.value.length).toEqual(1);
      // 3. remove product from cart
      service.removeFromCart(productMock.id);
      // 4.  check that product was removed from cart
      expect(service.products$.value.length).toEqual(0);
    });
  });

  describe('clearCart', () => {
    it('should clear the cart', () => {
      // 1. add products in cart
      service.addToCart(productMock);
      service.addToCart(productMock2);
      // 2. check that the product was added to cart
      expect(service.products$.value.length).toEqual(2);
      // 3. remove all products from cart
      service.clearCart();
      // 4. check that the products were removed from cart
      expect(service.products$.value.length).toEqual(0);
    });
  });
});
