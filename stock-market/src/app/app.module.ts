import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';

/**
NgModule - an annotation used to label a class as an angular module
 * declarations - the components available in the module
 * imports - The modules imported
 * bootstrap - The component that acts as an entry point to your application
 */
@NgModule({
  declarations: [AppComponent, StockItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
