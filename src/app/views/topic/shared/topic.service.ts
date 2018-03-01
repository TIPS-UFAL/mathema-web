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

  getTopic(pk: number) {
    return this.http.get(this.url + 'topic/' + pk + '/')
  }

  updateTopic(obj: any, pk: number) {
    return this.http.patch(this.url + 'topic/' + pk + '/', obj)
  }

  deleteTopic(pk: number) {
    return this.http.delete(this.url + 'topic/' + pk + '/')
  }
}
