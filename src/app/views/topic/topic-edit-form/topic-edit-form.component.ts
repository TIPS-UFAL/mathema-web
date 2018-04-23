import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {User} from '../../user/shared/models';
import {ActivatedRoute, Router} from '@angular/router';
import {CurriculumService} from '../../curriculum/shared/curriculum.service';
import {UserService} from '../../user/shared/services';
import {TopicService} from '../shared/topic.service';


@Component({
  selector: 'app-topic-edit-form',
  templateUrl: './topic-edit-form.component.html',
})
export class TopicEditFormComponent implements OnChanges {
  @ViewChild('topicEditModal') public topicEditModal: ModalDirective;
  @Input() topicTitle: string;
  @Input() topicDescription: string;

  id: any;
  title: string;
  description: string;
  user: User;

  constructor(private topicService: TopicService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
    userService.user.subscribe((user: User) => {
      this.user = user
    });
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.topicTitle !== undefined && changes.topicDescription !== undefined) {
      this.title = this.topicTitle;
      this.description = this.topicDescription;
    }
  }

  onSubmit() {
    this.topicService.updateTopic({
        'title': this.title,
        'description': this.description
      },
      this.id)
      .subscribe((data: any) => {
        this.router.navigate(['']);
      });
  }

  public show(): void {
    this.topicEditModal.show();
  }

  public hide(): void {
    this.topicEditModal.hide();
  }
}
