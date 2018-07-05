import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../../question/shared/question.model';
import {QuestionService} from '../../question/shared/question.service';
import {TopicService} from '../shared/topic.service';
import {Topic} from '../shared/topic.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {QuestionFormComponent} from '../../question/question-form/question-form.component';
import {CurriculumFormComponent} from '../../curriculum/curriculum-form/curriculum-form.component';
import {TopicFormComponent} from '../topic-form/topic-form.component';
import {SupportFormComponent} from '../../support/support-form/support-form.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {SupportDetailComponent} from '../../support/support-detail/support-detail.component';



@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit {
  @ViewChild('qtModal') public qtModal: QuestionFormComponent;
  @ViewChild('supportFormModal') public supportFormModal: SupportFormComponent;
  @ViewChild('supportDetailModal') public supportDetailModal: SupportDetailComponent;
  @ViewChild('topicEditModal') public topicEditModal: TopicFormComponent;

  topic: Topic;
  questions: Question[] = [];
  id: any;

  constructor(private topicService: TopicService,
              private route: ActivatedRoute,
              private router: Router,
              private questionService: QuestionService
              ) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    topicService.getTopic(this.id).subscribe((data: any) => {
      this.topic = data;
    });
    questionService.getQuestions(this.id).subscribe((data: any) => {
      this.questions = data;
    })
  }

  ngOnInit() {
  }

  onDelete() {
    this.topicService.deleteTopic(this.id).subscribe((data: any) => {
      this.router.navigate(['/curriculum/list/']);
    });
  }

}
