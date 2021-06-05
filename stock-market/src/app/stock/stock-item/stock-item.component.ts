import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  public name!: string;
  public code!: string;
  public price!: number;
  public previousPrice!: number;

  constructor() {}

  ngOnInit(): void {
    this.name = 'Amazing stock compoany';
    this.code = 'TSC101';
    this.price = 85;
    this.previousPrice = 80;
  }
}
