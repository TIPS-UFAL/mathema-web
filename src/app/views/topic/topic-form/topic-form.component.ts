import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

import { Topic } from '../shared/topic.model';
import { TopicService } from '../shared/topic.service';
import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';
import { CurriculumService } from 'app/views/curriculum/shared/curriculum.service'
import {UserService} from '../../user/shared/services';
import {User} from '../../user/shared/models';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
    selector: 'app-topic-form',
    templateUrl: './topic-form.component.html'
})

export class TopicFormComponent {
    @ViewChild('topicModal') public topicModal: ModalDirective;
    title: string;
    description: string;
    // suporte?: TopicSuport;
    // atividades?: TopicActivity;
    topicoPai?: Topic;
    user: User;
    id: any;

    topics: Topic[] = [];

    constructor(private topicService: TopicService,
                private userService: UserService,
                private router: Router,
                private route: ActivatedRoute, ) {

        // topicService.getTopics().subscribe((data: any) => {
        //     this.topics = data;
        // })
      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        userService.user.subscribe((user: User) => {
          this.user = user
        })
    }




    onSubmit() {
      if (this.topicoPai == null) {
        this.topicService.createTopic({
          'title': this.title,
          'description': this.description,
          'curriculum': this.id,
          'author': this.user.pk}).subscribe((data: any) => {
          this.router.navigate(['/topic/', data.id]);
        });
      } else {
        this.topicService.createTopic({
          'title': this.title,
          'description': this.description,
          'author': this.user.pk,
          'curriculum': this.id,
          'parent_topic': this.topicoPai.pk}).subscribe((data: any) => {
          this.router.navigate(['/topic/', data.id]);
        });
      }
    }

  public show(): void {
    this.topicModal.show();
  }

  public hide(): void {
    this.topicModal.hide();
  }
}
