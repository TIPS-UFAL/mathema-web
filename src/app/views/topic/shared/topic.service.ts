import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TopicService {

  url = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  createTopic(obj: any) {
    return this.http.post(this.url + 'topic/', obj)
      .map((res: Response) => res.json());
  }

  getTopics() {
    return this.http.get(this.url + 'topic/')
      .map((res: Response) => res.json());
  }

  getTopic(id: number) {
    return this.http.get(this.url + 'topic/' + id + '/')
      .map((res: Response) => res.json());
  }

  updateTopic(obj: any, id: number) {
    return this.http.patch(this.url + 'topic/' + id + '/', obj)
      .map((res: Response) => res.json());
  }

  deleteTopic(id: number) {
    return this.http.delete(this.url + 'topic/' + id + '/')
      .map((res: Response) => res.json());
  }
}