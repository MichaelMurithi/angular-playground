import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent implements OnInit {
  public stock!: Stock;
  public title: string = 'Create Stock Form';

  constructor() {
    this.stock = new Stock('test', '', 0, 0);
  }
  ngOnInit(): void {}

  getValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
