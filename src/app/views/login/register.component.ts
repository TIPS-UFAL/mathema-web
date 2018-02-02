import { Component } from '@angular/core';
import {User} from '../user/shared/models';
import {UserService} from '../user/shared/services';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  private username: string;
  private email: string;
  private password: string;
  private password2: string;
  private error = null;

  constructor (private userService: UserService, private router: Router) { }
  register () {
    this.userService.registerUser({'username': this.username, 'email': this.email, 'password1': this.password, 'password2': this.password2})
      .subscribe(user => {
        alert('Usuário criado com sucesso!');
        this.router.navigate(['/login']);
      }, (error: any) => {
        this.error = 'a';
      });
  }
}
