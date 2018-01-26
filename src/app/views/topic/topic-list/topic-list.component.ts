import { Component, OnInit } from '@angular/core';
import { Topic } from 'app/views/topic/shared/topic.model';
import { TopicService } from 'app/views/topic/shared/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topics: Topic[] = [];

  constructor(private topicService: TopicService) {
    topicService.getTopics().subscribe((data: any) => {
      this.topics = data;
    })
  }

  goTo(id: number) {

  }

  ngOnInit() {
  }

}
