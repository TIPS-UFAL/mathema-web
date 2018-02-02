import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Topic } from '../shared/topic.model';
import { TopicService } from '../shared/topic.service';
import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';
import { CurriculumService } from 'app/views/curriculum/shared/curriculum.service'

@Component({
    selector: 'app-topic-form',
    templateUrl: './topic-form.component.html'
})

export class TopicFormComponent {

    titulo: string;
    descricao: string;
    curriculo: Curriculum;
    topicoPai?: Topic;

    curriculums: Curriculum[] = [];
    topics: Topic[] = [];

    constructor(private topicService: TopicService,
                private curriculumService: CurriculumService,
                private router: Router) {
        curriculumService.getCurriculums().subscribe((data: any) => {
            this.curriculums = data;
        })

        topicService.getTopics().subscribe((data:any) => {
            this.topics = data;
        })
    }

    onSubmit() {
        this.topicService.createTopic({'titulo': this.titulo,
                                       'descricao': this.descricao,
                                       'curriculo': this.curriculo,
                                       'topicoPai': this.topicoPai}).subscribe(() => {
                                            this.router.navigate(['']);
                                    });
    }
}