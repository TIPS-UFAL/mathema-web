import {Component, OnInit, ViewChild} from '@angular/core';

import {Topic} from '../../topic/shared/topic.model';
import {CurriculumService} from '../../curriculum/shared/curriculum.service';
import {TopicService} from '../../topic/shared/topic.service';
import {Curriculum} from '../../curriculum/shared/curriculum.model';
import {ActivatedRoute} from '@angular/router';
import {Group} from '../shared/group.model';
import {GroupService} from '../shared/group.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {
  group: Group;
  curriculum: Curriculum;
  topics: Topic[] = [];

  constructor(private groupService: GroupService,
              private curriculumService: CurriculumService,
              private topicService: TopicService,
              private route: ActivatedRoute) {
    const idGroup = parseInt(this.route.snapshot.paramMap.get('id'));
    groupService.getGroup(idGroup).subscribe((data: any) => {
      this.group = data;
      this.curriculumService.getCurriculum(this.group.curriculum).subscribe( (curr: any) => {
        this.curriculum = curr;
      });
      topicService.getTopics(this.group.curriculum).subscribe((top: any) => {
        this.topics = top;
      });
    });
  }

  ngOnInit() {
  }

}
