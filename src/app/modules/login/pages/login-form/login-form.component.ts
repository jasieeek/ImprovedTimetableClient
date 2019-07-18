import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../core/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username = 'javainuse';
  password = '';
  invalidLogin = false;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(['/']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
