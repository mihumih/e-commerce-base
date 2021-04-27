import { Injectable } from '@angular/core';
import { Order } from '../types';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: any;

  constructor() { }

  GetAllOrders(): Order[] {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    return orders.map(order => ({
      date: new Date(order.date),
      numberOfProducts: order.products.length,
      orderTotal: order.products.reduce((sum, product) => sum + product.price, 0),
    }));
  };

  SaveOrder(products, shippingAddress): void {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      products,
      shippingAddress,
      date: new Date()
    }

    localStorage.setItem("orders", JSON.stringify([ ...orders, newOrder ]))
  };
}
