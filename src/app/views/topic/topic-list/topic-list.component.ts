import { Component, OnInit, ViewChild  } from '@angular/core';
import { Topic } from 'app/views/topic/shared/topic.model';
import { TopicService } from 'app/views/topic/shared/topic.service';
import {ActivatedRoute} from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
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
              private route: ActivatedRoute) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
     topicService.getTopics(this.id).subscribe((data: any) => {
       this.topics = data;
     })
  }

  goTo(id: number) {

  }

  ngOnInit() {
  }

}
