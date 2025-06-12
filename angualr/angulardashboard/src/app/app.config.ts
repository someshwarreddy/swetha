import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpHandler, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { fauthInterceptor } from './fauth.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
  provideHttpClient(withInterceptors([fauthInterceptor])),
  // class based 
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptorService,
  //   multi: true
  // },
  ]
};
