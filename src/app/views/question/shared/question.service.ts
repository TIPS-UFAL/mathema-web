import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class QuestionService {



  constructor(private http: HttpService) { }

  createQuestion(obj: any) {
    return this.http.post('activity/', obj)
  }

  getQuestions(id: number) {
    return this.http.get('activity/list/' + id + '/')
  }

  getQuestion(id: number) {
    return this.http.get('activity/' + id + '/')
  }

  updateQuestion(obj: any, id: number) {
    return this.http.patch( 'activity/' + id + '/', obj)
  }

  deleteQuestion(id: number) {
    return this.http.delete('activity/' + id + '/')
  }
}
