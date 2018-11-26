import { Component, OnInit, ElementRef } from '@angular/core';
import { Profile } from '../profile.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../auth/services';
import { UserService } from '../../user/shared/services';

@Component({
	selector: 'app-profile-edit',
	templateUrl: './profile-edit.component.html',
	styleUrls: ['./profile-edit.component.scss']
})

export class ProfileEditComponent implements OnInit{

	profile = new Profile()

	public name
	public username
	public email

  constructor(private route: ActivatedRoute,
				private authenticationService: AuthenticationService,
				private userService: UserService,
				private router: Router) {

		userService.getUser().subscribe((data: any) => {
			this.profile.id = data.id;
			this.profile.username = data.username;
			this.profile.email = data.email;

			userService.findUser(data.id).subscribe((user: any) => {
				this.profile.name = user.username;
			})
		})
	}

	ngOnInit() {
		this.profile.id = parseInt(this.route.snapshot.paramMap.get("id"))

		console.log(this.profile)
	}

	onEdit() {
		console.log(this.name)
		console.log(this.username)
		console.log(this.email)

		if(this.name != "" && this.name != null) {
			this.profile.name = this.name
		}

		if(this.username != "" && this.username != null) {
			this.profile.username = this.username
		}

		if(this.email != "" && this.email != null) {
			// validar email
		}

		// this.userService.updateUser({
		// 	'username': this.profile.username,
		// 	'email': this.profile.email
		// }).subscribe(() => {
		// 	this.router.navigate['/profile']
		// })
	}
}
