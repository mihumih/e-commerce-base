import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductsService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  describe('getProducts', () => {
    it( 'should return an array of products', () => {
      // 1. call the getProducts method 
      service.getProducts(0).subscribe((products) => {
        expect(products.length).toBe(20)
      })
    })
  })

  describe('getProduct', () => {
    it( 'should return one product', () => {
      // 1. call the getProduct method
      service.getProduct(2).subscribe((product) => {
        expect(product.id).toBe(2)
      })
    })
  })
});
