import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from '../shared/question.model';
import { QuestionService } from '../shared/question.service';
import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';
import { CurriculumService } from 'app/views/curriculum/shared/curriculum.service';
import { Topic } from 'app/views/topic/shared/topic.model';
import { TopicService } from 'app/views/topic/shared/topic.service';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html'
})

export class QuestionFormComponent {

    titulo: string;
    descricao: string;
    curriculo: Curriculum;
    topico: Topic[];

    curriculums: Curriculum[] = [];
    topics: Topic[] = [];

    constructor(private questionService: QuestionService,
                private curriculumService: CurriculumService,
                private topicService: TopicService,
                private router: Router) {

        curriculumService.getCurriculums().subscribe((data: any) => {
            this.curriculums = data;
        })

        topicService.getTopics().subscribe((data:any) => {
            this.topics = data;
        })
    }

    onSubmit() {
        this.questionService.createQuestion({'titulo': this.titulo,
                                             'descricao': this.descricao,
                                             'curriculo': this.curriculo,
                                             'topico': this.topico}).subscribe(() => {
                                                 this.router.navigate(['']);
                                             });
    }
}
