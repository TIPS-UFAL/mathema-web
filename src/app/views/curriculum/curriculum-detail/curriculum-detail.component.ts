import {Component, OnInit, ViewChild} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {CurriculumService} from '../shared/curriculum.service';
import {Curriculum} from '../shared/curriculum.model';
import {TopicService} from '../../topic/shared/topic.service';
import {Topic} from '../../topic/shared/topic.model';
import {GroupFormComponent} from '../../group/group-form/group-form.component';


@Component({
  selector: 'app-curriculum-detail',
  templateUrl: './curriculum-detail.component.html',
  styleUrls: ['./curriculum-detail.component.scss']
})
export class CurriculumDetailComponent implements OnInit {
  @ViewChild('gpModal') public gpModal: GroupFormComponent;

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
    });
  }

  ngOnInit() {
  }
}

