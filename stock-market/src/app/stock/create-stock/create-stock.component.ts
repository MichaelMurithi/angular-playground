import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent {
  public stock!: Stock;

  public title: string = 'Create Stock Form';

  constructor() {
    this.stock = new Stock('test', '', 0, 0, 'NASDAQ');
  }

  public nameControl = new FormControl();

  onSubmit() {
    console.log('Name control value', this.nameControl.value);
  }
}
