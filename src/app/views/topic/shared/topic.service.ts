import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class TopicService {

  url = 'http://localhost:8000/api/';

  constructor(private http: HttpService) { }

  createTopic(obj: any) {
    return this.http.post(this.url + 'topic/', obj)
  }

  getTopics() {
    return this.http.get(this.url + 'topic/')
  }

  getTopic(id: number) {
    return this.http.get(this.url + 'topic/' + id + '/')
  }

  updateTopic(obj: any, id: number) {
    return this.http.patch(this.url + 'topic/' + id + '/', obj)
  }

  deleteTopic(id: number) {
    return this.http.delete(this.url + 'topic/' + id + '/')
  }
}
