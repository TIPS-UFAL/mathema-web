import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {

  url = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  createQuiz(obj: any) {
    return this.http.post(this.url + 'quiz/', obj)
      .map((res: Response) => res.json());
  }

  getQuizzes() {
    return this.http.get(this.url + 'quiz/')
      .map((res: Response) => res.json());
  }

  getQuiz(id: number) {
    return this.http.get(this.url + 'quiz/' + id + '/')
      .map((res: Response) => res.json());
  }

  updateQuiz(obj: any, id: number) {
    return this.http.patch(this.url + 'quiz/' + id + '/', obj)
      .map((res: Response) => res.json());
  }

  deleteQuiz(id: number) {
    return this.http.delete(this.url + 'quiz/' + id + '/')
      .map((res: Response) => res.json());
  }
}