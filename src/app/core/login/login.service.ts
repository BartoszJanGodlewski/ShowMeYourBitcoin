import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { LoginDto } from '@core/dto/login.dto';
import { User } from '@core/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(loginDTO: LoginDto): Observable<User> {
    let user: User = this.getUserEntryFromSessionStorage();

    if (!user) {
      this.setUserEntryInSessionStorage(loginDTO);
      user = this.getUserEntryFromSessionStorage();
    }

    return of(user);
  }

  private setUserEntryInSessionStorage(loginData: LoginDto): void {
    sessionStorage.setItem('user', JSON.stringify(loginData));
  }

  getUserEntryFromSessionStorage(): User {
    const userDataFromStorage = JSON.parse(sessionStorage.getItem('user'));
    return userDataFromStorage ? userDataFromStorage : null;
  }
}
