import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BtcHttpInterceptor } from '@core/http/btc-http.interceptor';
import { LoginComponent } from './login/login.component';
import { LoginService } from '@core/login/login.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  LoginComponent,
  NotFoundComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BtcHttpInterceptor,
      multi: true
    },
  ],
})
export class CoreModule { }
