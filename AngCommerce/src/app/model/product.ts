import { NumberValueAccessor } from '@angular/forms';

export class Product {
  public isOnSale!: boolean;

  constructor(
    public name: String,
    public price: number,
    public image: string,
    public quantity: number
  ) {}

  updateSalesStatus() {
    return (this.isOnSale = this.quantity > 0);
  }

  increaseQuantity() {
    this.quantity += 1;
    this.updateSalesStatus();
  }

  decreaseQuantity(): void {
    this.quantity -= 1;
    this.updateSalesStatus();
  }
}
