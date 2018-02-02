import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
    public token: string;
    public url = 'http://localhost:8000/api/';
    public headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    public options: any = { headers: this.headers };

    constructor(private http: HttpClient, private router: Router) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
                localStorage.setItem('currentUser', JSON.stringify({token: token }));
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
}
