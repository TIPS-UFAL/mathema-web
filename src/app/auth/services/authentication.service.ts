import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {NgxPermissionsService} from 'ngx-permissions';

@Injectable()
export class AuthenticationService {
    token: string;
    permissions = ['ADMIN', 'STUDENT', 'TEACHER']; // permissions that exists in the system
    url = 'https://mathema-api.herokuapp.com/api/';
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    options: any = { headers: this.headers };

    constructor(private http: HttpClient,
                private router: Router,
                private permissionService: NgxPermissionsService) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        // set permission if saved in local storage
        const currentPermission = JSON.parse(localStorage.getItem('permissions'));
        this.permissionService.loadPermissions([currentPermission]);
    }

    login(username: string, password: string, callBack: any) {
        this.http.post(this.url + 'rest-auth/login/', JSON.stringify({'username': username, 'password': password }), this.options)
          .subscribe((json: any) => {
                // login successful
                // set token property
                this.token = json.token;
                const permission = this.permissions[json.user.user_type];

                // store jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({token: this.token }));
                // store ngx-permission
                localStorage.setItem('permissions', JSON.stringify(permission));
                // load permissions
                this.permissionService.loadPermissions([permission]);

                callBack(true);
            }, error => {
                callBack(false);
          });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('permissions');
        this.router.navigate(['login']);
    }

    getToken() {
      return 'Bearer ' + this.token
    }
}
