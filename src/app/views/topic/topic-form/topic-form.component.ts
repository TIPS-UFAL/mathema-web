import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    // suporte?: TopicSuport;
    // atividades?: TopicActivity;
    topicoPai?: Topic;
    user: User;

    topics: Topic[] = [];

    constructor(private topicService: TopicService,
                private userService: UserService,
                private router: Router) {

        topicService.getTopics().subscribe((data: any) => {
            this.topics = data;
        })

        userService.user.subscribe((user: User) => {
          this.user = user
        })
    }

    onSubmit() {
      // verifica se é subtopico
      if(this.topicoPai == null) {
        console.log("entrei")
        this.topicService.createTopic({'title': this.titulo,
          'description': this.descricao,
          'author': this.user.pk}).subscribe(() => {
          this.router.navigate(['']);
        });
      } else {
        console.log("n entrei")
        this.topicService.createTopic({'title': this.titulo,
          'description': this.descricao,
          'author': this.user.pk,
          'parent_topic': this.topicoPai.pk}).subscribe(() => {
          this.router.navigate(['']);
        });
      }
    }
}
