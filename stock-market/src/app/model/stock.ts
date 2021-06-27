import { Person } from './person';
export class Stock {
  isFavorite?: boolean = false;
  notablePeople?: Person[];

  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice?: number
  ) {
    this.notablePeople = [];
  }

  isPositiveChange(): boolean {
    if (this.previousPrice) return this.price >= this.previousPrice;
    return false;
  }

  isLargeChange(): boolean {
    if (this.previousPrice) {
      let diff = this.previousPrice / this.price - 1;
      return Math.abs(diff) > 0.01;
    }
    return false;
  }
}
