import { Component } from '@angular/core';
import {User} from '../user/shared/models';
import {UserService} from '../user/shared/services';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  username: string;
  email: string;
  password: string;
  password2: string;
  error = [];

  constructor (private userService: UserService, private router: Router) { }
  register () {
    this.userService.registerUser({'username': this.username, 'email': this.email, 'password1': this.password, 'password2': this.password2})
      .subscribe(user => {
        alert('Usuário criado com sucesso!');
        this.router.navigate(['/login']);
      }, (error: any) => {
        if (error.password1) {
          this.error.concat(error.password1);
        }
        if (error.username) {
          this.error.concat(error.username);
        }
        if (error.password2) {
          this.error.concat(error.password2);
        }
        if (error.email) {
          this.error.concat(error.email);
        }
      });
  }
}
