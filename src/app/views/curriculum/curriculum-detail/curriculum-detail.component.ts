import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CurriculumService} from '../shared/curriculum.service';
import {Curriculum} from '../shared/curriculum.model';
import {TopicService} from '../../topic/shared/topic.service';
import {Topic} from '../../topic/shared/topic.model';
import {GroupFormComponent} from '../../group/group-form/group-form.component';
import {GroupService} from '../../group/shared/group.service';
import {Group} from '../../group/shared/group.model';
import {QuestionFormComponent} from '../../question/question-form/question-form.component';
import {TopicFormComponent} from '../../topic/topic-form/topic-form.component';
import {CurriculumFormComponent} from '../curriculum-form/curriculum-form.component';


@Component({
  selector: 'app-curriculum-detail',
  templateUrl: './curriculum-detail.component.html',
  styleUrls: ['./curriculum-detail.component.scss']
})
export class CurriculumDetailComponent implements OnInit {
  @ViewChild('gpModal') public gpModal: GroupFormComponent;
  @ViewChild('topicModal') public topicModal: TopicFormComponent;
  @ViewChild('curriculumEditModal') public curriculumEditModal: CurriculumFormComponent;

  public curriculumId;
  topics: Topic[] = [];
  curriculum: Curriculum;
  id: any;

  constructor(private curriculumService: CurriculumService,
              private route: ActivatedRoute,
              private router: Router,
              private topicService: TopicService
              ) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    curriculumService.getCurriculum( this.id).subscribe((data: any) => {
      this.curriculum = data;
      console.log(this.curriculum);
    });
    topicService.getTopics(this.id).subscribe((data: any) => {
      this.topics = data;
    });
  }

  ngOnInit() {
  }

  onDelete() {
    console.log(this.id);
    this.curriculumService.deleteCurriculum(this.id).subscribe(() => {
      this.router.navigate(['/curriculum/list/']);
    });
  }
}

