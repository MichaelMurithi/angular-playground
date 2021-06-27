import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

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

  //Using Form Builder to create a form when the component is initialised
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  //Using FormBuilder instead of FormGroup and separate form controls
  createForm() {
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(2.0)]],
      notablePeople: this.fb.array([]),
    });
  }

  get notablePeople(): FormArray {
    return this.stockForm.get('notablePeople') as FormArray;
  }

  addNotablePerson() {
    this.notablePeople.push(
      this.fb.group({
        name: ['', Validators.required],
        title: ['', Validators.required],
      })
    );
  }

  removeNotablePerson(index: number) {
    this.notablePeople.removeAt(index);
  }
  //Simulates stock loading from server
  loadStockFromServer() {
    this.stock = new Stock('Served Stock ', 'TST', 20, 10);
    let stockFormModel = Object.assign({}, this.stock);
    delete stockFormModel.previousPrice;
    delete stockFormModel.isFavorite;
    this.stockForm.setValue(stockFormModel);
  }
  //Creates a patch of the stockForm
  patchStockForm() {
    this.stock = new Stock('Cool Stock', 'CST', 100, 200);
    this.stockForm.patchValue(this.stock);
  }
  //Resets the form
  resetForm() {
    this.stockForm.reset();
  }
  //Assigns the current value of stockForm to the value in stockForm
  onSubmit() {
    this.stock = Object.assign({}, this.stockForm.value);
    console.info(this.stock);
  }
}
