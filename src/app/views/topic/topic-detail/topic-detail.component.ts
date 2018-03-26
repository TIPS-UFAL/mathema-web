import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Question} from '../../question/shared/question.model';
import {QuestionService} from '../../question/shared/question.service';
import {TopicService} from '../shared/topic.service';
import {Topic} from '../shared/topic.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {QuestionFormComponent} from '../../question/question-form/question-form.component';



@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {
  @ViewChild('qtModal') public qtModal: QuestionFormComponent;

  topic: Topic;
  questions: Question[] = [];

  constructor(private topicService: TopicService,
              private route: ActivatedRoute,
              private questionService: QuestionService
              ) {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    topicService.getTopic(id).subscribe((data: any) => {
      this.topic = data;
    });
    questionService.getQuestions(id).subscribe((data: any) => {
      this.questions = data;
    })
  }

  ngOnInit() {
  }

}
