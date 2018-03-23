import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Topic } from '../shared/topic.model';
import { TopicService } from '../shared/topic.service';
import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';
import { CurriculumService } from 'app/views/curriculum/shared/curriculum.service'
import {UserService} from '../../user/shared/services';
import {User} from '../../user/shared/models';

@Component({
    selector: 'app-topic-form',
    templateUrl: './topic-form.component.html'
})

export class TopicFormComponent {

    titulo: string;
    descricao: string;

    topicoPai?: Topic;
    user: User;
    id: any;

    topics: Topic[] = [];

    constructor(private topicService: TopicService,
                private userService: UserService,
                private router: Router,
                private route: ActivatedRoute, ) {

      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      
      userService.user.subscribe((user: User) => {
        this.user = user
      })
      
      topicService.getTopics(this.id).subscribe((data: any) => {
        this.topics = data
      })
    }

    onSubmit() {
      // verifica se é subtopico
      if (this.topicoPai != null) {
        this.topicService.createTopic({'title': this.titulo,
          'description': this.descricao,
          'author': this.user.pk,
          'parent_topic': this.topicoPai.pk,
          'curriculum': this.id}).subscribe(() => {
          this.router.navigate(['']);
        });
      } else {
        this.topicService.createTopic({'title': this.titulo,
          'description': this.descricao,
          'author': this.user.pk,
          'curriculum': this.id}).subscribe(() => {
          this.router.navigate(['']);
        });
      }
    }
}
