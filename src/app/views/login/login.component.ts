import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { AuthenticationService } from '../../auth/services/index';
import {UserService} from '../user/shared/services';
import {User} from '../user/shared/models';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    returnUrl;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private route: ActivatedRoute) { }

    ngOnInit() {
      this.userService.getUser().subscribe((user: User) => {
        this.router.navigate(['/dashboard']);
      });

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password, this.callBack.bind(this));
    }

    callBack(success: boolean) {
      if (!success) {
        this.error = 'Username or password is incorrect';
        this.loading = false;
      } else {
        console.log(this.returnUrl);
        this.router.navigateByUrl(this.returnUrl);
      }
    }
}
