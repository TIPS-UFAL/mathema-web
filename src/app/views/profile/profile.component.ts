import { Component, ElementRef } from '@angular/core';
import { Profile } from './profile';
import { AuthenticationService } from '../../auth/services';
import { User } from '../../views/user/shared/models';
import { UserService } from '../../views/user/shared/services';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent {

    model = new Profile();

    user: User;

    constructor(private el: ElementRef,
                private authenticationService: AuthenticationService,
                private userService: UserService) {
        userService.user.subscribe((user: User) => {
        this.user = user;
        });
    }
}