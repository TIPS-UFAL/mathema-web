import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import {CurriculumService} from '../shared/curriculum.service';
import {Curriculum} from '../shared/curriculum.model';
import {TopicService} from '../../topic/shared/topic.service';
import {Topic} from '../../topic/shared/topic.model';
import {GroupService} from '../../group/shared/group.service';
import {Group} from '../../group/shared/group.model';
import {QuestionFormComponent} from '../../question/question-form/question-form.component';
import {TopicFormComponent} from '../../topic/topic-form/topic-form.component';


@Component({
  selector: 'app-curriculum-detail',
  templateUrl: './curriculum-detail.component.html',
  styleUrls: ['./curriculum-detail.component.scss']
})
export class CurriculumDetailComponent implements OnInit {
  @ViewChild('topicModal') public topicModal: TopicFormComponent;

  public curriculumId;
  topics: Topic[] = [];
  curriculum: Curriculum;

  constructor(private curriculumService: CurriculumService,
              private route: ActivatedRoute,
              private topicService: TopicService,
              ) {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    curriculumService.getCurriculum(id).subscribe((data: any) => {
      this.curriculum = data;
      console.log(this.curriculum);
    });
    topicService.getTopics(id).subscribe((data: any) => {
      this.topics = data;
    })
  }

  ngOnInit() {
  }

}

