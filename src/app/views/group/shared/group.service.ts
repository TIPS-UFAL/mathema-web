import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class GroupService {

  url = 'http://localhost:8000/api/';

  constructor(private http: HttpService) { }

  createGroup(obj: any) {
    return this.http.post(this.url + 'group/', obj)
  }

  getGroups() {
    return this.http.get(this.url + 'group/')
  }

  getGroup(pk: number) {
    return this.http.get(this.url + 'group/' + pk + '/')
  }

  updateGroup(obj: any, pk: number) {
    return this.http.patch(this.url + 'group/' + pk + '/', obj)
  }

  deleteGroup(pk: number) {
    return this.http.delete(this.url + 'group/' + pk + '/')
  }
}
