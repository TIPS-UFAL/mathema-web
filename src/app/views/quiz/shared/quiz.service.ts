import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class QuizService {

  url = 'http://localhost:8000/api/';

  constructor(private http: HttpService) { }

  createQuiz(obj: any) {
    return this.http.post(this.url + 'quiz/', obj);
  }

  getQuizzes() {
    return this.http.get(this.url + 'quiz/');
  }

  getQuiz(id: number) {
    return this.http.get(this.url + 'quiz/' + id + '/');
  }

  updateQuiz(obj: any, id: number) {
    return this.http.patch(this.url + 'quiz/' + id + '/', obj);
  }

  deleteQuiz(id: number) {
    return this.http.delete(this.url + 'quiz/' + id + '/');
  }
}
