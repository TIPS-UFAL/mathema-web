import { Component, ElementRef } from '@angular/core';
import {AuthenticationService} from '../../auth/services';
import {User} from '../../views/user/shared/models';
import {UserService} from '../../views/user/shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader {

  user: User;

  constructor(private el: ElementRef,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
    userService.user.subscribe((user: User) => {
      this.user = user;
    });
  }

  //wait for the component to render completely
  ngOnInit(): void {

    var nativeElement: HTMLElement = this.el.nativeElement,
    parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }

  logout () {
    this.authenticationService.logout();
  }

}
