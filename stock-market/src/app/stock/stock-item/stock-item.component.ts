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
  public stockStyles: any;

  constructor() {}

  //Toggle favorite method
  toggleFavorite(event: any) {
    console.log(`The state of favorite stock was changed by ${event}`);
    this.stock.isFavorite = !this.stock.isFavorite;
  }

  ngOnInit(): void {
    this.stock = new Stock('Amazing stock', 'AMS', 1000, 900);

    //Stock classes will be aplied on the template based on the properties of the stock changes
    this.stockClasses = {
      positive: this.stock.isPositiveChange,
      negative: !this.stock.isPositiveChange,
      'small-change': !this.stock.isLargeChange,
      'large-change': this.stock.isLargeChange,
    };
    this.stockStyles = {
      color: this.stock.isPositiveChange() ? 'green' : 'red',
      'font-size': this.stock.isLargeChange() ? '1.2em' : '0.8em',
    };

    console.log('The stock classes are: ', this.stockClasses);
  }
}
