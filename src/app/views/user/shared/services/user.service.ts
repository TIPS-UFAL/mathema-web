import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../../../../auth/services';
import {plainToClass} from 'class-transformer';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../models';

@Injectable()
export class UserService {
  public user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public url = 'http://localhost:8000/api/';

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) {
      this.getUser().subscribe((data: User) => {
        this.user.next(plainToClass(User, data));
      });
  }

  findUser(pk: number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    const options: any = ({ headers: headers });

    return this.http.get(this.url + 'user/' + pk + '/', options)
  }

  getUser(): Observable<any> {
    // add authorization header with jwt token

    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    const options: any = ({ headers: headers });

    // get user from api
    return this.http.get(this.url + 'rest-auth/' + 'user/', options);
  }

  registerUser (user: any): Observable<any> {
    return this.http.post(this.url + 'rest-auth/' + 'registration/', user);
  }
}



