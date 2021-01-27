import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../../types'

@Component({
  selector: 'app-product-minicart',
  templateUrl: './product-minicart.component.html',
  styleUrls: ['./product-minicart.component.scss']
})
export class ProductMinicartComponent implements OnInit {
  @Input() product: Product;
  constructor(public cartService: CartService) {} 

  ngOnInit(): void {
  }

}
