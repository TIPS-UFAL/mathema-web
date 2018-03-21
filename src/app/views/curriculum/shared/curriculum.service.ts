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

  getCurriculum(pk: number) {
    return this.http.get(this.url + 'curriculum/' + pk + '/');
  }

  updateCurriculum(obj: any, pk: number) {
    return this.http.patch(this.url + 'curriculum/' + pk + '/', obj);
  }

  deleteCurriculum(pk: number) {
    return this.http.delete(this.url + 'curriculum/' + pk + '/');
  }
}
