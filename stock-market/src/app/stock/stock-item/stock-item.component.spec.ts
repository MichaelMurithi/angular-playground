import { TestBed, async } from '@angular/core/testing';
import { StockItemComponent } from './stock-item.component';
import { Stock } from '../../model/stock';
import { By } from '@angular/platform-browser';

describe('Stock Item Component', () => {
  let fixture: any, component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemComponent);
    component = fixture.componentInstance;
    component.stocks = [
      new Stock('Testing Stock', 'TS', 100, 200),
      new Stock('Testing Stock', 'TS', 100, 200),
      new Stock('Testing Stock', 'TS', 100, 200),
    ];
    fixture.detectChanges();
  });
  it('should create stock component and render stock data', () => {
    const nameEl = fixture.debugElement.query(By.css('.name'));
    expect(nameEl.nativeElement.textContent).toEqual('Amazing stock -AMS');
    const priceEl = fixture.debugElement.query(By.css('.price.negative'));
    expect(priceEl.nativeElement.textContent).toEqual('100');
    const addFavoriteBtnEl = fixture.debugElement.query(By.css('button'));
  });
});
