import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = { // to get url data for edit: https://angular.io/guide/router#getting-route-information
  providers: [provideRouter(routes, withComponentInputBinding()), provideClientHydration()]
};
