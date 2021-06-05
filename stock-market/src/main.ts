/**
 * Determines which angular module is to be loaded when the application starts
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//Enables production module for production environments
if (environment.production) {
  enableProdMode();
}

//Bootstraps the appmodule and catches any errors in bootstrapping the module
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
