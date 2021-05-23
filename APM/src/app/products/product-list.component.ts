import { Component } from '@angular/core';
import { Iproduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = '...';
  products: Iproduct[] = [
    {
      productId: 1,
      productName: 'Golden Cat',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: 'An amazing Golden cat',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 2,
      productName: 'Amazing Goat',
      productCode: 'AMG-0023',
      releaseDate: 'March 18, 2021',
      description: 'An amazing Golden goat',
      price: 54.99,
      starRating: 4.2,
      imageUrl: 'assets/images/hammer.png',
    },
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    console.log('In OnInit');
  }
}
