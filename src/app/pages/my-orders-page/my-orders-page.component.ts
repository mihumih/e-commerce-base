import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../types'

@Component({
  selector: 'app-my-orders-page',
  templateUrl: './my-orders-page.component.html',
  styleUrls: ['./my-orders-page.component.scss']
})
export class MyOrdersPageComponent implements OnInit {
  displayedColumns: string[] = [ 'date', 'numberOfProducts', 'orderTotal'];
  orders: Order[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
   this.orders = this.orderService.GetAllOrders(); 
  }
}
