import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Hello, stock market component loaded');
    window.alert('Stock Item component works');
  }
}
