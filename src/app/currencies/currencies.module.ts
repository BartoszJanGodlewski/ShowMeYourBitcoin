import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrenciesComponent } from './currencies.component';
import { CurrenciesRoutingModule } from './currencies-routing.module';
import { CurrenciesResolve } from './currencies.resolve';
import { CurrencyPlnComponent } from './currency-pln/currency-pln.component';
import { CurrencyUsdComponent } from './currency-usd/currency-usd.component';

@NgModule({
  declarations: [
    CurrenciesComponent,
    CurrencyPlnComponent,
    CurrencyUsdComponent
  ],
  imports: [
    CommonModule,
    CurrenciesRoutingModule
  ],
  providers: [
    CurrenciesResolve
  ]
})
export class CurrenciesModule { }
