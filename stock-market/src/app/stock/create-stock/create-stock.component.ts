import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
})
export class CreateStockComponent {
  public stock!: Stock;

  public title: string = 'Create Stock Form';

  public stockForm!: FormGroup;
  get name() {
    return this.stockForm.get('name');
  }
  get price() {
    return this.stockForm.get('price');
  }
  get code() {
    return this.stockForm.get('code');
  }

  constructor(private fb: FormBuilder) {
    this.stock = new Stock('test', '', 0, 0, 'NASDAQ');
  }

  //Using FormBuilder instead of FormGroup and separate form controls
  createForm() {
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],

      price: [0, [Validators.required, Validators.min(2.0)]],
    });
  }
  onSubmit() {
    console.log('Stock Form Value', this.stockForm.value);
  }
}
