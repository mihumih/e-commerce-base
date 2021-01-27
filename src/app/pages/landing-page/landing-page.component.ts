import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types';
import { ProductService } from  '../../services/product.service';
import { PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit { 
  products: Product[] = [];
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts(0).subscribe((products) => this.products = products)
  }

  getProducts(event: PageEvent): void {
    this.productService.getProducts(event.pageIndex).subscribe((products) => this.products = products)
  }
}
