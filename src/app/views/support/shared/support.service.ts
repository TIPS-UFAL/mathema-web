import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from '../../../shared/http.service';

@Injectable()
export class SupportService {



  constructor(private http: HttpService) { }

  createSupport(obj: any) {
    return this.http.post('support/', obj)
  }

  getSupports(id: number) {
    return this.http.get('support/list/' + id + '/')
  }

  getSupport(id: number) {
    return this.http.get('support/' + id + '/')
  }

  updateSupport(obj: any, id: number) {
    return this.http.patch( 'support/' + id + '/', obj)
  }

  deleteSupport(id: number) {
    return this.http.delete('support/' + id + '/')
  }
}
