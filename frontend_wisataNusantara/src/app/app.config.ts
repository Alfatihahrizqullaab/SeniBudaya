import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollOffset: [0, 80], // biar tidak ketutup navbar
    }))
  ]
};
