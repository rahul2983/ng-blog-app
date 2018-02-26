import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { LoginService } from './login.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
  public user: User;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = new User();
   }

  ngOnInit() {
  }

  validateLogin() {
    if(this.user.username && this.user.password) {
        this.loginService.validateLogin(this.user).subscribe(result => {
          if(result['status'] === 'success') {
            localStorage.setItem('loggedInUser', this.user.username);
            this.router.navigate(['/home']);
        } else {
          alert('Wrong username password');
        }
      }, error => {
        console.log('error is ', error);
      });
    } else {
      alert('enter user name and password');
    }
  }

}
