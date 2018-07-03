import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class GroupService {

  constructor(private http: HttpService) { }

  createGroup(obj: any) {
    return this.http.post('group/', obj);
  }

  getGroups() {
    return this.http.get('group/');
  }

  getGroup(pk: string) {
    return this.http.get('group/' + pk + '/');
  }

  updateGroup(obj: any, pk: number) {
    return this.http.patch('group/' + pk + '/', obj);
  }

  deleteGroup(pk: number) {
    return this.http.delete('group/' + pk + '/');
  }

  createGroupStudent(obj: any) {
    return this.http.post('studentGroup/', obj);
  }

  getGroupStudent(pk_student: number, pk_group: string) {
    return this.http.get('studentGroup/' + pk_student + '/' + pk_group + '/');
  }
}
