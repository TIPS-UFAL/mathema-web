import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map'
import { HttpService } from '../../../shared/http.service'

@Injectable() export class AnswerService {

    url = 'http://localhost:8000/api/';

    constructor(private http: HttpService) { }

    createAnswer(obj: any) {
        return this.http.post(this.url + 'answer/', obj)
    }

    getAnswers() {
        return this.http.get(this.url + 'answer/')
    }

    getAnswer(id: number) {
        return this.http.get(this.url + 'answer/' + id + '/')
    }

    updateAnswer(obj: any, id: number) {
        return this.http.patch(this.url + 'answer/' + id + '/', obj)
    }

    deleteAnswer(id: number) {
        return this.http.delete(this.url + 'answer/' + id + '/')
    }
}
