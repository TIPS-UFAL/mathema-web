import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../auth/services';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

  get(url: string) {
    return this.http.get(url, this.createHeaders());
  }

  post(url: string, obj: any) {
    return this.http.post(url, obj, this.createHeaders());
  }

  private createHeaders() {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authentication' :  'Bearer ' + this.authenticationService.token
    });
    return { headers: headers };
  }
}
