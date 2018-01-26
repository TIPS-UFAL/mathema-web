import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from '../shared/question.model';
import { QuestionService } from '../shared/question.service';
import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';
import { Topic } from 'app/views/topic/shared/topic.model';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html'
})

export class QuestionFormComponent {

    titulo: string;
    descricao: string;
    curriculo: Curriculum;
    topico: Topic;
    subTopico?: Topic;    //se tiver subtopico

    constructor(private questionService: QuestionService,
                private router: Router) { }
    
    onSubmit() {
        this.questionService.createQuestion({'titulo': this.titulo,
                                             'descricao': this.descricao,
                                             'curriculo': this.curriculo,
                                             'topico': this.topico,
                                             'subTopico': this.subTopico}).subscribe(() => {
                                                 this.router.navigate(['']);
                                             });   
    }
}