import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class CurriculumService {

  url = 'http://localhost:8000/api/';

  constructor(private http: HttpService) { }

  createCurriculum(obj: any) {
    return this.http.post(this.url + 'curriculum/', obj)
      .map((res: Response) => res.json());
  }

  getCurriculums() {
    return this.http.get(this.url + 'curriculum/')
      .map((res: Response) => res.json());
  }

  getCurriculum(id: number) {
    return this.http.get(this.url + 'curriculum/' + id + '/')
      .map((res: Response) => res.json());
  }

  updateCurriculum(obj: any, id: number) {
    return this.http.patch(this.url + 'curriculum/' + id + '/', obj)
      .map((res: Response) => res.json());
  }

  deleteCurriculum(id: number) {
    return this.http.delete(this.url + 'curriculum/' + id + '/')
      .map((res: Response) => res.json());
  }
}
