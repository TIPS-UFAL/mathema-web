import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class CurriculumService {

  url = 'http://localhost:8000/api/';

  constructor(private http: HttpService) { }

  createCurriculum(obj: any) {
    return this.http.post(this.url + 'curriculum/', obj);
  }

  getCurriculums() {
    return this.http.get(this.url + 'curriculum/');
  }

  getCurriculum(id: number) {
    return this.http.get(this.url + 'curriculum/' + id + '/');
  }

  updateCurriculum(obj: any, id: number) {
    return this.http.patch(this.url + 'curriculum/' + id + '/', obj);
  }

  deleteCurriculum(id: number) {
    return this.http.delete(this.url + 'curriculum/' + id + '/');
  }
}
