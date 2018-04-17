import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { Topic } from 'app/views/topic/shared/topic.model';
import { TopicService } from 'app/views/topic/shared/topic.service';
import {ActivatedRoute} from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnChanges {

  topics: Topic[] = [];

  @ViewChild('childModal') public childModal: ModalDirective;
  @Input() curriculumId: number;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  constructor(private topicService: TopicService,
              private route: ActivatedRoute,
              private router: Router) { }

  onSelect(topic) {
    this.router.navigate(['/topic', topic.id]);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.curriculumId !== undefined) {
      console.log('oi', this.curriculumId);
      this.topicService.getTopics(this.curriculumId).subscribe((data: any) => {
        this.topics = data;
      })
    }
  }

}
