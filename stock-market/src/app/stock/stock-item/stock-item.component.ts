import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  public name!: string;
  public code!: string;
  public price!: number;
  public previousPrice!: number;
  public positiveChange!: boolean;
  public isFavorite!: boolean;

  constructor() {}

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit(): void {
    this.name = 'Amazing stock compoany';
    this.code = 'TSC101';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price > this.previousPrice;
    this.isFavorite = false;
  }
}
