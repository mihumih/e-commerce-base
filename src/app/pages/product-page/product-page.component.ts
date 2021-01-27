import { Component, OnInit } from '@angular/core';
import { Product } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service'
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product: Product = null;

  constructor(private route: ActivatedRoute, private productService: ProductService, public cartService: CartService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProduct(id).subscribe((product) => this.product = product);
  }
}
