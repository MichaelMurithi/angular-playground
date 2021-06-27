import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Welcome to stock market management system';

  public stocksList!: Array<Stock>;

  ngOnInit(): void {
    this.stocksList = [
      new Stock('Amazing stock', 'AMS', 1000, 900),
      new Stock('Another amazing stock', 'AAs', 600, 300),
      new Stock('Great stock', 'AGS', 1200, 600),
    ];
    console.log('App Component - On init');
  }
  testMethod() {
    console.log('Test method in appComponent triggered');
  }
}
