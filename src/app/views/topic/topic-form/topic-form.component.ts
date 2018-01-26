import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Topic } from '../shared/topic.model';
import { TopicService } from '../shared/topic.service';
import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';

@Component({
    selector: 'app-topic-form',
    templateUrl: './topic-form.component.html'
})

export class TopicFormComponent {

    titulo: string;
    descricao: string;
    curriculo: Curriculum;
    topicoPai?: Topic;

    constructor(private topicService: TopicService,
                private router: Router) { }

    onSubmit() {
        this.topicService.createTopic({'titulo': this.titulo,
                                       'descricao': this.descricao,
                                       'curriculo': this.curriculo,
                                       'topicoPai': this.topicoPai}).subscribe(() => {
                                            this.router.navigate(['']);
                                    });
    }
}