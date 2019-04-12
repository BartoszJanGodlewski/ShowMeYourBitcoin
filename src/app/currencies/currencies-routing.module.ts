import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CurrenciesComponent } from './currencies.component';
import { CurrenciesResolve } from './currencies.resolve';

const routes: Routes = [
  {
    path: '',
    component: CurrenciesComponent,
    resolve: { coins: CurrenciesResolve }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrenciesRoutingModule { }
