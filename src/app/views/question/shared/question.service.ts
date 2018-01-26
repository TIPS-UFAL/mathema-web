import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {

  url = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  createQuestion(obj: any) {
    return this.http.post(this.url + 'question/', obj)
      .map((res: Response) => res.json());
  }

  getQuestions() {
    return this.http.get(this.url + 'question/')
      .map((res: Response) => res.json());
  }

  getQuestion(id: number) {
    return this.http.get(this.url + 'question/' + id + '/')
      .map((res: Response) => res.json());
  }

  updateQuestion(obj: any, id: number) {
    return this.http.patch(this.url + 'question/' + id + '/', obj)
      .map((res: Response) => res.json());
  }

  deleteQuestion(id: number) {
    return this.http.delete(this.url + 'question/' + id + '/')
      .map((res: Response) => res.json());
  }
}
