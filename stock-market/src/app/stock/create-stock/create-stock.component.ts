import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent {
  public stock!: Stock;

  public title: string = 'Create Stock Form';

  public stockForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  constructor() {
    this.stock = new Stock('test', '', 0, 0, 'NASDAQ');
  }

  public nameControl = new FormControl();

  onSubmit() {
    console.log('Name control value', this.nameControl.value);
  }
}
