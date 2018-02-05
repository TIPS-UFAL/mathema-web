import {Component, OnInit} from '@angular/core';
import {User} from '../user/shared/models/index';
import {UserService} from '../user/shared/services/index';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  password2: string;
  error = [];
  private registerForm: FormGroup;

  constructor (private userService: UserService, private router: Router) { }

  ngOnInit (): void {
    this.registerForm = new FormGroup({
      'username': new FormControl(this.username, Validators.required),
      'password': new FormControl(this.password, Validators.required),
      'password2': new FormControl(this.password2, Validators.required)
    });
  }

  register () {
    this.userService.registerUser({'username': this.username, 'email': this.email, 'password1': this.password, 'password2': this.password2})
      .subscribe(user => {
        alert('Usuário criado com sucesso!');
        this.router.navigate(['/login']);
      }, (error: any) => {
        this.error = [];
        if (error.error.username) {
          if (error.error.username == "Este campo é obrigatório.") {
            this.error = this.error.concat("Campo Username é obrigatório");
          } else {
            this.error = this.error.concat(error.error.username);
          }
        }
        if (error.error.password1) {
          if (error.error.password1 == "Este campo é obrigatório.") {
            this.error = this.error.concat("Campo Password é obrigatório");
          } else {
            this.error = this.error.concat(error.error.password1);
          }
        }
        if (error.error.password2) {
          if (error.error.password2 == "Este campo é obrigatório.") {
            this.error = this.error.concat("Campo Repeat Password é obrigatório");
          } else {
            this.error = this.error.concat(error.error.password2);
          }
        }
        if (error.error.email) {
          if (error.error.email == "Este campo é obrigatório.") {
            this.error = this.error.concat("Campo Email é obrigatório");
          } else {
            this.error = this.error.concat(error.error.email);
          }
        }
        console.log(this.error);
      });
  }
}
