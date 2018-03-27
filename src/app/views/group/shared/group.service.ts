import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class GroupService {

  constructor(private http: HttpService) { }

  createGroup(obj: any) {
    return this.http.post('group/', obj)
  }

  getGroups() {
    return this.http.get('group/')
  }

  getGroup(pk: number) {
    return this.http.get('group/' + pk + '/')
  }

  updateGroup(obj: any, pk: number) {
    return this.http.patch('group/' + pk + '/', obj)
  }

  deleteGroup(pk: number) {
    return this.http.delete('group/' + pk + '/')
  }

  searchGroup(gk: string) {
    return this.http.get('group?group_key=' + gk)
  }
}
