import { Component, ElementRef } from '@angular/core';
import { AuthenticationService } from '../../auth/services';
import { User } from '../../views/user/shared/models';
import { UserService } from '../../views/user/shared/services';
import { Profile } from './profile.model'
import { Router } from '@angular/router';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent {

    profile = new Profile()

    constructor(private el: ElementRef,
                private authenticationService: AuthenticationService,
                private userService: UserService,
                private router: Router) {

        userService.getUser().subscribe((data: any) => {
            this.profile.id = data.id
            this.profile.username = data.username
            this.profile.email = data.email

            userService.findUser(data.id).subscribe((user: any) => {
                this.profile.name = user.username
            })

            if (data.user_type == 2) {
                this.profile.user_type = 'Professor'
            } else {
                this.profile.user_type = 'Aluno'
            }
        })
    }

    callEdit() {
        // TODO: quando modifica algum dado, perde autenticação
        // console.log("alou")
        // this.router.navigate(['/profile', this.profile.id])
    }
}
