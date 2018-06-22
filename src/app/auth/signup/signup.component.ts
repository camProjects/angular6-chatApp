import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  displayName: string;
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  signUp() {
    const email = this.email;
    const password = this.password;
    const displayName = this.displayName;
    this.authService
      .signUp(email, password, displayName)
      .then(resolver => this.router.navigate(['chat']))
      .catch(err => (this.errorMsg = err.message));
  }
}
