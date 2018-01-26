import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Quiz } from '../shared/quiz.model';
import { QuizService } from '../shared/quiz.service';
import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';
import { Topic } from 'app/views/topic/shared/topic.model';
import { Question } from 'app/views/question/shared/question.model';

@Component({
    selector: 'app-quiz-form',
    templateUrl: './quiz-form.component.html'
})

export class QuizFormComponent {

    titulo: string;
    descricao: string;
    curriculo: Curriculum;
    topico: Topic;
    atividade: Question[];

    constructor(private quizService: QuizService,
                private router: Router) { }

    onSubmit() {
        this.quizService.createQuiz({'titulo': this.titulo,
                                     'descricao': this.descricao,
                                     'curriculo': this.curriculo,
                                     'topico': this.topico,
                                     'atividade': this.atividade}).subscribe(() => {
                                        this.router.navigate(['']);
                                    });  
    }
}