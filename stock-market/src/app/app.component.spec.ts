import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Stock } from './model/stock';

describe('AppComponent', () => {
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
