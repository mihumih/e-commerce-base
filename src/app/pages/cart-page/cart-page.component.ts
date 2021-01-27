import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'SKU', 'price'];
  shippingAddress = new FormControl('');

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }
  
  handleSubmit(): void {
    const prevOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      products: this.cartService.products$.value,
      shippingAddress: this.shippingAddress.value,
      date: new Date()
    }

    localStorage.setItem("orders", JSON.stringify([ ...prevOrders, newOrder ]))

    this.cartService.clearCart();

    alert("Your order was summitted succesfully!");
  }
}
