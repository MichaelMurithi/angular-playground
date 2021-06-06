import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public product!: Product;
  public saleClasses: any;
  public quantities!: Array<string>;

  ngOnInit(): void {
    this.product = new Product(
      'Nice product',
      1000,
      '../../../assets/product-image.png',
      12
    );
    this.saleClasses = {
      available: this.product.isOnSale,
      unavailable: !this.product.isOnSale,
    };
    this.quantities = this.product.generateQuantityRange();
    console.log(this.quantities);
  }
}
