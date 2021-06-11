import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';

import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent implements OnInit {
  @Input() public stocks!: Array<Stock>;
  @Output() public toggleFavorite: EventEmitter<Stock[]>;

  public stockClasses: any;
  public stockStyles: any;
  private counter: number = 0;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock[]>();
  }

  ngOnInit(): void {
    this.stocks = [
      new Stock('Amazing stock ', 'AMS ', 1000, 900),
      new Stock('Another amazing stock ', 'AAs', 900, 1000),
      new Stock('Great stock ', 'AGS', 1200, 600),
    ];
  }

  trackStockByCode(index: number, stock: Stock): string {
    return stock.code;
  }
  onToggleFavorite() {
    //Updates the value in the stock item component
    //Because it is triggered as a result of an event
    //Binding from the stock item component
    this.toggleFavorite.emit(this.stocks);
  }
  changeStockPrice(event: any, index: number): void {
    //This will not update the value in the stock item compoenent
    // because it is not changing the same refference and angular will not check for it in the onPush detection strategy
    this.stocks[index].price += 5;
  }
  ngOnChanges() {
    console.log('Stock item component -- On changes');
  }
}
