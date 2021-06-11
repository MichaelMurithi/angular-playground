export class Stock {
  isFavorite: boolean = false;

  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice: number,
    public exchange: string
  ) {}

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }

  isLargeChange(): boolean {
    let diff = this.previousPrice / this.price - 1;
    return Math.abs(diff) > 0.01;
  }
}
