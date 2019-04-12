import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@core/auth.guard';
import { LoginComponent } from '@core/login/login.component';
import { NotFoundComponent } from '@core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-zone',
    pathMatch: 'full',
  },
  {
    path: 'user-zone',
    loadChildren: './user-zone/user-zone.module#UserZoneModule',
    canLoad: [AuthGuard],
  },
  {
    path: 'currencies',
    loadChildren: './currencies/currencies.module#CurrenciesModule',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
