import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormControl } from '@angular/forms'
import { OrderService } from '../../services/order.service'


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'SKU', 'price'];
  shippingAddress = new FormControl('');
 

  constructor(public cartService: CartService, private orderService: OrderService) { }

  ngOnInit(): void {
  }
  
  handleSubmit(): void {
    this.orderService.SaveOrder(this.cartService.products$.value, this.shippingAddress.value);
    this.cartService.clearCart();

    alert("Your order was summitted succesfully!");
  }
}
