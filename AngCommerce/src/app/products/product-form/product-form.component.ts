import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  public productForm!: FormGroup;
  get productName() {
    {
      return this.productForm.get('productName');
    }
  }
  get price() {
    return this.productForm.get('price');
  }
  get images() {
    return this.productForm.get('image');
  }
  get isOnSale() {
    return this.productForm.get('isOnSale');
  }

  createForm() {
    this.productForm = this.fb.group({
      productName: [null, Validators.required],
      price: [1, Validators.required, Validators.min(1)],
      image: [null, Validators.required],
      isOnSale: [null],
    });
  }

  onSubmit() {}
}
