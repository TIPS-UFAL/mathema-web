import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Quiz } from '../shared/quiz.model';
import { QuizService } from '../shared/quiz.service';
import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';
import { CurriculumService } from 'app/views/curriculum/shared/curriculum.service';
import { Topic } from 'app/views/topic/shared/topic.model';
import { TopicService } from 'app/views/topic/shared/topic.service';
import { Question } from 'app/views/question/shared/question.model';
import { QuestionService } from 'app/views/question/shared/question.service';

@Component({
    selector: 'app-quiz-form',
    templateUrl: './quiz-form.component.html'
})

export class QuizFormComponent {

    titulo: string;
    descricao: string;
    curriculo: Curriculum;
    topico: Topic[];
    atividade: Question[];

    curriculums: Curriculum[] = [];
    topics: Topic[] = [];
    questions: Question[] = [];

    constructor(private quizService: QuizService,
                private curriculumService: CurriculumService,
                private topicService: TopicService,
                private questionService: QuestionService,
                private router: Router) {

        curriculumService.getCurriculums().subscribe((data: any) => {
            this.curriculums = data;
        })

        // topicService.getTopics().subscribe((data: any) => {
        //     this.topics = data;
        // })
        //
        // questionService.getQuestions().subscribe((data: any) => {
        //     this.questions = data;
        // })

    }

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
