import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Stock } from './model/stock';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  describe('Simple, Isolated Unit test', () => {
    it('should have stocks instantiated on ngInit', () => {
      const appComponent = new AppComponent();
      expect(appComponent.stocksList).toBeUndefined();
      appComponent.ngOnInit();
      expect(appComponent.stocksList).toEqual([
        new Stock('Amazing stock', 'AMS', 1000, 900),
        new Stock('Another amazing stock', 'AAs', 900, 1000),
        new Stock('Great stock', 'AGS', 1200, 600),
      ]);
    });
    it('should have a title', () => {
      const appComponent = new AppComponent();
      appComponent.ngOnInit();
      expect(appComponent.title).toMatch(
        'Welcome to stock market management system'
      );
    });
  });
  describe('Angular-aware test', () => {
    let fixture: ComponentFixture<AppComponent>, component;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, StockItemComponent],
      }).compileComponents();
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges;
    });
    it('should load stock with default values', () => {
      const titleEl = fixture.debugElement.query(By.css('h2'));
      expect(titleEl.nativeElement.textContent.trim()).toEqual(
        'Welcome to stock market management system'
      );
    });
  });
});
