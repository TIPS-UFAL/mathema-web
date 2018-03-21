import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class QuizService {


  constructor(private http: HttpService) { }

  createQuiz(obj: any) {
    return this.http.post('quiz/', obj);
  }

  getQuizzes() {
    return this.http.get('quiz/');
  }

  getQuiz(id: number) {
    return this.http.get('quiz/' + id + '/');
  }

  updateQuiz(obj: any, id: number) {
    return this.http.patch('quiz/' + id + '/', obj);
  }

  deleteQuiz(id: number) {
    return this.http.delete('quiz/' + id + '/');
  }
}
