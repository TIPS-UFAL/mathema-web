import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

import { Topic } from '../shared/topic.model';
import { TopicService } from '../shared/topic.service';
import {UserService} from '../../user/shared/services';
import {User} from '../../user/shared/models';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
    selector: 'app-topic-form',
    templateUrl: './topic-form.component.html'
})

export class TopicFormComponent {
    @ViewChild('topicModal', /* TODO: add static flag */ {static: false}) public topicModal: ModalDirective;
    title: string;
    description: string;
    topicoPai?: Topic;
    user: User;
    id: any;

    constructor(private topicService: TopicService,
                private userService: UserService,
                private router: Router,
                private route: ActivatedRoute) {

      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        userService.user.subscribe((user: User) => {
          this.user = user
        })
    }

    onSubmit() {
        this.topicService.createTopic({
          'title': this.title,
          'description': this.description,
          'curriculum': this.id,
          'author': this.user.pk}).subscribe((data: any) => {
          this.router.navigate(['/topic/', data.id]);
        });
      }

  public show(): void {
    this.topicModal.show();
  }

  public hide(): void {
    this.topicModal.hide();
  }
}
