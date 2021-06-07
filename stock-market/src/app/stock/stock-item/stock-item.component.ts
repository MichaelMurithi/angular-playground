import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  @Input() public stocks!: Array<Stock>;

  public stockClasses: any;
  public stockStyles: any;

  constructor() {}

  //Toggle favorite method
  toggleFavorite(event: any, index: number) {
    console.log(`The state of favorite stock was changed by ${event}`);
    this.stocks[index].isFavorite = !this.stocks[index].isFavorite;
  }

  ngOnInit(): void {
    this.stocks = [
      new Stock('Amazing stock', 'AMS', 1000, 900),
      new Stock('Another amazing stock', 'AAs', 900, 1000),
      new Stock('Great stock', 'AGS', 1200, 600),
    ];
  }

  trackStockByCode(index: number, stock: Stock): string {
    return stock.code;
  }
}
