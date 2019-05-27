import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../auth/services';


@Injectable()
export class HttpService {

  url = 'https://mathema-api.herokuapp.com/api/';

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

  get(url: string) {
    return this.http.get(this.url + url, this.createHeaders());
  }

  post(url: string, obj: any) {
    return this.http.post(this.url + url, obj, this.createHeaders());
  }

  delete(url: string) {
    return this.http.delete(this.url + url, this.createHeaders());
  }

  patch(url: string, obj: any) {
    return this.http.patch(this.url + url, obj, this.createHeaders());
  }


  private createHeaders() {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' :  'Bearer ' + this.authenticationService.token
    });
    return { headers: headers };
  }
}
