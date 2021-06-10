import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(public products: Array<Product>) {}

  ngOnInit(): void {
    this.products = [
      new Product('Rice', 100, 'prImge.png', 10),
      new Product('Bata', 100, 'prImge.png', 10),
      new Product('Soda', 100, 'prImge.png', 10),
      new Product('Shirt', 100, 'prImge.png', 10),
      new Product('Mobile Phone', 100, 'prImge.png', 10),
    ];
  }
}
