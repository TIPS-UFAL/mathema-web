import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Question } from '../shared/question.model';
import { QuestionService } from '../shared/question.service';
import { Topic } from 'app/views/topic/shared/topic.model';
import { TopicService } from 'app/views/topic/shared/topic.service';
import {User} from '../../user/shared/models';
import {UserService} from '../../user/shared/services';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html'
})

export class QuestionFormComponent {
    @ViewChild('qtModal') public qtModal: ModalDirective;
    title: string;
    description: string;
    // tipo: ActivityType;
    user: User;
    id: any;
    topic: Topic;


    constructor(private questionService: QuestionService,
                private userService: UserService,
                private route: ActivatedRoute,
                private router: Router) {

      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      userService.user.subscribe((user: User) => {
        this.user = user
      })
    }

    onSubmit() {
      this.questionService.createQuestion({
        'title': this.title,
        'description': this.description,
        'author': this.user.pk,
        'topic': this.id
        }).subscribe((data: any) => {
        this.router.navigate(['/question/', data.id]);
        });

    }

  public show(): void {
    this.qtModal.show();
  }

  public hide(): void {
    this.qtModal.hide();
  }
}
