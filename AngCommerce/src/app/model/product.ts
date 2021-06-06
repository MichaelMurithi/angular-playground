import { NumberValueAccessor } from '@angular/forms';

export class Product {
  public isOnSale!: boolean;

  constructor(
    public name: String,
    public price: number,
    public image: string,
    public quantity: number
  ) {}
  // Updates sales status based on the available product quantity
  updateSalesStatus() {
    return (this.isOnSale = this.quantity > 0);
  }
  //Increase available Product quantity
  increaseQuantity() {
    this.quantity += 1;
    this.updateSalesStatus();
  }
  //Decrease the available product quantity
  decreaseQuantity(): void {
    this.quantity -= 1;
    this.updateSalesStatus();
  }
  //Generate a quantity range from the available number of products
  generateQuantityRange(): Array<string> {
    let quantities = [];
    for (let i = 0; i < this.quantity; i++) {
      quantities.push(`${i}`);
    }
    return quantities;
  }
}
