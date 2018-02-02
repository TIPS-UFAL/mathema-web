import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
    token: string;
    url = 'http://localhost:8000/api/';
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    options: any = { headers: this.headers };

    constructor(private http: HttpClient, private router: Router) {
        // set token if saved in local storage
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string, callBack: any) {
        this.http.post(this.url + 'rest-auth/login/', JSON.stringify({'username': username, 'password': password }), this.options)
          .subscribe((json: any) => {
                // login successful if there's a jwt token in the response
                const token = json.token;
                // set token property
                this.token = token;

                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                console.log('logou');
                callBack(true);
            }, error => {
                callBack(false);
          });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }

    getToken() {
      return 'Bearer ' + this.token
    }
}
