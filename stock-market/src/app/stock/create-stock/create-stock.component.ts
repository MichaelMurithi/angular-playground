import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent implements OnInit {
  public stock!: Stock;
  public confirmed: boolean = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];

  public title: string = 'Create Stock Form';

  constructor() {
    this.stock = new Stock('test', '', 0, 0, 'NASDAQ');
  }

  ngOnInit(): void {}

  getValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }

  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }
  createStock() {
    console.log('Creating stock ', this.stock);
  }
}
