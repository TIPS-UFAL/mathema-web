import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class CurriculumService {

  constructor(private http: HttpService) { }

  createCurriculum(obj: any) {
    return this.http.post('curriculum/', obj);
  }

  getCurriculums() {
    return this.http.get('curriculum/');
  }

  getCurriculum(pk: number) {
    return this.http.get('curriculum/' + pk + '/');
  }

  updateCurriculum(obj: any, pk: number) {
    return this.http.patch('curriculum/' + pk + '/', obj);
  }

  deleteCurriculum(pk: number) {
    return this.http.delete('curriculum/' + pk + '/');
  }
}
