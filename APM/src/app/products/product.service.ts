import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
}) //Injectable decorator is used to make a service.
export class ProductService {
  getProducts(): IProduct[] {
    return [
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
  }
}
