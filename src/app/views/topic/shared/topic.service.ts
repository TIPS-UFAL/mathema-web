import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class TopicService {


  constructor(private http: HttpService) { }

  createTopic(obj: any) {
    return this.http.post('topic/', obj)
  }

  getTopics(curriculum_pk: number) {
    return this.http.get('topic/list/' + curriculum_pk + '/')
  }

  getTopic(pk: number) {
    return this.http.get('topic/' + pk + '/')
  }

  updateTopic(obj: any, pk: number) {
    return this.http.patch('topic/' + pk + '/', obj)
  }

  deleteTopic(pk: number) {
    return this.http.delete('topic/' + pk + '/')
  }
}
