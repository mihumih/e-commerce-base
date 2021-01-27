import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Product } from '../types'
import PRODUCTS from './PRODUCTS' 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  totalProducts: number = PRODUCTS.length;

  getProducts(page: number): Observable<Product[]> { 
    const limit = 20;
    const paginatedProducts = PRODUCTS.filter((product, index) => index >= (page * limit) && index < ((page + 1) * limit) ? true : false);

    return of(paginatedProducts);
  }

  getProduct(id: number): Observable<Product> {
    const product = PRODUCTS.find((product) => product.id === id);

    return of(product);
  }
}
