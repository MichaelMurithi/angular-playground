import {
  Component,
  SimpleChanges,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit,
} from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  title = 'Welcome to stock market management system';

  public stocksList!: Array<Stock>;

  ngOnInit(): void {
    this.stocksList = [
      new Stock('Amazing stock', 'AMS', 1000, 900),
      new Stock('Another amazing stock', 'AAs', 900, 1000),
      new Stock('Great stock', 'AGS', 1200, 600),
    ];
    console.log('App Component - On init');
  }
  ngAfterViewInit(): void {
    console.log('App Component -- After View Init');
  }
  ngAfterViewChecked(): void {
    console.log('App Component -- After view checked');
  }
  ngAfterContentInit(): void {
    console.log('App component --After content init');
  }
  ngAfterContentChecked(): void {
    console.log('App component --After Content checked');
  }
  ngOnDestroy(): void {
    console.log('App Component --On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('App component -- On Changes - ', changes);
  }
  ngDoCheck(): void {
    console.log('App component - Do Check');
  }
}
