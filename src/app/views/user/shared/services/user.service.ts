import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { User } from '../models/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../../../../auth/services';

@Injectable()
export class UserService {
  user: User;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) {
      this.getUser();
  }

  getUser(): Observable<any> {
    // add authorization header with jwt token

    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    const options: any = ({ headers: headers });

    // get users from api
    return this.http.get('http://localhost:8000/api/rest-auth/user/', options);
  }
}



