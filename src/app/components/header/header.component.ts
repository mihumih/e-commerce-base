import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  products = [];
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.products$.subscribe(products => this.products = products);
  }
}
