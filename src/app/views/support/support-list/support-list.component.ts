import {Component, OnInit, ViewChild} from '@angular/core';
import { Support } from 'app/views/support/shared/support.model';
import { SupportService } from 'app/views/support/shared/support.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Curriculum} from '../../curriculum/shared/curriculum.model';
import {CurriculumService} from '../../curriculum/shared/curriculum.service';
import {Topic} from '../../topic/shared/topic.model';
import {TopicService} from '../../topic/shared/topic.service';
import {SupportDetailComponent} from '../support-detail/support-detail.component';
import {SupportEditFormComponent} from '../support-edit-form/support-edit-form.component';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.scss']
})
export class SupportListComponent implements OnInit {
  @ViewChild('supportDetailModal', /* TODO: add static flag */ {static: false}) public supportDetailModal: SupportDetailComponent;
  @ViewChild('supportEditFormModal', /* TODO: add static flag */ {static: false}) public supportEditFormModal: SupportEditFormComponent;

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

  ngOnInit() {
  }

  onDelete(supportId) {
    console.log(supportId);
    this.supportService.deleteSupport(supportId).subscribe((data: any) => {
      this.router.navigate(['/topic/' + this.id]);
    });
  }

}
