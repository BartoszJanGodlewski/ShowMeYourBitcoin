import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from '@core/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'btc-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  private buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit({value, valid}): void {
    if (valid) {
      this.loginService.login(value).subscribe((user: User) => {
        if (user) {
          this.router.navigate(['/user-zone']);
        }
      });
    }
  }
}
