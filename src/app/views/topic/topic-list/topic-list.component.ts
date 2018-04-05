import { Component, OnInit, ViewChild  } from '@angular/core';
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
export class TopicListComponent implements OnInit {

  topics: Topic[] = [];
  id: any;
  @ViewChild('childModal') public childModal: ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  constructor(private topicService: TopicService,
              private route: ActivatedRoute,
              private router: Router) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
     topicService.getTopics(this.id).subscribe((data: any) => {
       this.topics = data;
     })
  }

  onSelect(topic) {
    console.log('entrei no onSelect')
    this.router.navigate(['/topic', topic.id]);
  }

  goTo(id: number) {

  }

  ngOnInit() {
  }

}
