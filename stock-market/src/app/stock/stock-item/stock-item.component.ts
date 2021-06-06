import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  public stock!: Stock;
  public stockClasses: any;

  constructor() {}

  //Toggle favorite method
  toggleFavorite(event: any) {
    console.log(`The state of favorite stock was changed by ${event}`);
    this.stock.isFavorite = !this.stock.isFavorite;
  }

  ngOnInit(): void {
    this.stock = new Stock('Amazing stock', 'AMS', 1000, 900);
    let diff = this.stock.previousPrice - this.stock.price - 1;
    let isLargeChange = Math.abs(diff) > 0.01;
    //Stock classes will be aplied on the template based on the properties of the stock changes
    this.stockClasses = {
      positive: this.stock.isPositiveChange,
      negative: !this.stock.isPositiveChange,
      'small-change': !isLargeChange,
      'large-change': isLargeChange,
    };
    console.log('The stock classes are: ', this.stockClasses);
  }
}
