import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './products/product-list.component';
import { AppComponent } from './app.component';
import { ConvertToSpace } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace,
    StarComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
