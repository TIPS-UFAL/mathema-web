import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {UserService} from '../../views/user/shared/services';
import {AuthenticationService} from './authentication.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router, private userService: UserService) {

  }

  canActivate(route, state) {
    return Observable.create((observer: Observer<boolean>) => {
      this.userService.getUser().subscribe(data => {
        observer.next(true);
        observer.complete();
      }, error => {
        this.authService.logout();
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        observer.error(false);
        observer.complete();
      });
    });
  }
}
