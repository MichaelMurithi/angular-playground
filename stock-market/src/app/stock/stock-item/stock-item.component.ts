import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  @Input() public stocks!: Array<Stock>;
  @Output() public toggleFavorite: EventEmitter<Stock[]>;

  public stockClasses: any;
  public stockStyles: any;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock[]>();
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
  onToggleFavorite() {
    this.toggleFavorite.emit(this.stocks);
  }
}
