import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders-page',
  templateUrl: './my-orders-page.component.html',
  styleUrls: ['./my-orders-page.component.scss']
})
export class MyOrdersPageComponent implements OnInit {
  displayedColumns: string[] = [ 'date', 'numberOfProducts', 'orderTotal'];
  orders = [];
  constructor() { }

  ngOnInit(): void {
    const prevOrders = JSON.parse(localStorage.getItem("orders")) || [];

    this.orders = prevOrders.map(order => ({
      date: new Date(order.date),
      numberOfProducts: order.products.length,
      orderTotal: order.products.reduce((sum, product) => sum + product.price, 0),
    }));
  }
}
