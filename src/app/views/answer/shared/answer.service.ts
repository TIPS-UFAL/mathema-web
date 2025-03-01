import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map'
import { HttpService } from '../../../shared/http.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthenticationService } from '../../../auth/services'

@Injectable() export class AnswerService {

    url = 'http://localhost:8000/api/';

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {
        
    }

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
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        const options: any = ({ headers: headers });

        return this.http.patch(this.url + 'answer/' + id + '/', obj, options)
    }

    deleteAnswer(id: number) {
        return this.http.delete(this.url + 'answer/' + id + '/')
    }
}
