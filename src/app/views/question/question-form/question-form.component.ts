import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from '../shared/question.model';
import { QuestionService } from '../shared/question.service';
import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';
import { CurriculumService } from 'app/views/curriculum/shared/curriculum.service';
import { Topic } from 'app/views/topic/shared/topic.model';
import { TopicService } from 'app/views/topic/shared/topic.service';
import {User} from '../../user/shared/models';
import {UserService} from '../../user/shared/services';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html'
})

export class QuestionFormComponent {

    titulo: string;
    descricao: string;
    // tipo: ActivityType;
    topico: Topic
    user: User;

     topics: Topic[] = [];

    constructor(private questionService: QuestionService,
                private topicService: TopicService,
                userService: UserService,
                private router: Router) {
      topicService.getTopics().subscribe((data: any) => {
        this.topics = data;
      })

      userService.user.subscribe((user: User) => {
        this.user = user
      })
    }

    onSubmit() {
        this.questionService.createQuestion({'title': this.titulo,
                                             'description': this.descricao,
                                             'author': this.user.pk}).subscribe(() => {
                                                 this.router.navigate(['']);
                                             });
    }
}
