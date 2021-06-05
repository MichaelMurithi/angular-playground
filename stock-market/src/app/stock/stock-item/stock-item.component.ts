import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  public stock!: Stock;

  constructor() {}

  //Toggle favorite method
  toggleFavorite(event: any) {
    console.log(`The state of favorite stock was changed by ${event}`);
    this.stock.isFavorite = !this.stock.isFavorite;
  }

  ngOnInit(): void {
    this.stock = new Stock('Amazing stock', 'AMS', 1000, 900);
  }
}
