import { Component, OnInit } from '@angular/core';
import { Support } from 'app/views/support/shared/support.model';
import { SupportService } from 'app/views/support/shared/support.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Curriculum} from '../../curriculum/shared/curriculum.model';
import {CurriculumService} from '../../curriculum/shared/curriculum.service';
import {Topic} from '../../topic/shared/topic.model';
import {TopicService} from '../../topic/shared/topic.service';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.scss']
})
export class SupportListComponent implements OnInit {

  supports: Support[] = [];
  topic: Topic;
  id: any;
  public author;

  constructor(private supportService: SupportService,
              private topicService: TopicService,
              private route: ActivatedRoute,
              private router: Router) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.topicService.getTopic(this.id).subscribe((data: any) => {
      this.topic = data;
      console.log(this.topic);
    });
    supportService.getSupports(this.id).subscribe((data: any) => {
      this.supports = data
    })
  }

  goTo(id: number) {

  }

  ngOnInit() {
  }

  onSelect(support) {
    console.log('oi');
    console.log(support.id);
    console.log(support.title);
    console.log(support.description);
    this.router.navigate(['/support', support.id]);
  }

  checkSubmissions(support) {
    this.router.navigate(['/answer/list', {support_id: support.id}]);
  }
}
