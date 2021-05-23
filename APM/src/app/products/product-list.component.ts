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
  filteredProducts: Iproduct[] = [];

  private _listFilter: string = '';
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(this.listFilter);
  }

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

  performFilter(filterBy: string): Iproduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product) =>
      product.productName.toLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.listFilter = 'Cart';
  }
}
