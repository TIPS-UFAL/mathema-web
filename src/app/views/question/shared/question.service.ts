import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class QuestionService {

  url = 'http://localhost:8000/api/';

  constructor(private http: HttpService) { }

  createQuestion(obj: any) {
    return this.http.post(this.url + 'activity/', obj)
  }

  getQuestions() {
    return this.http.get(this.url + 'activity/')
  }

  getQuestion(id: number) {
    return this.http.get(this.url + 'activity/' + id + '/')
  }

  updateQuestion(obj: any, id: number) {
    return this.http.patch(this.url + 'activity/' + id + '/', obj)
  }

  deleteQuestion(id: number) {
    return this.http.delete(this.url + 'activity/' + id + '/')
  }
}
