import { CanLoad, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { LoginService } from '@core/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private loginService: LoginService,
              private router: Router) {}

  canLoad(): boolean {
    const currentUser = this.loginService.getUserEntryFromSessionStorage();
    console.log(currentUser);
    if (!currentUser) {
      this.router.navigate(['/login']);

      return false;
    }

    return true;
  }
}
