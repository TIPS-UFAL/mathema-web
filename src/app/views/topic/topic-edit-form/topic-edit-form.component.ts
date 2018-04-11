import {Component, OnInit, ViewChild} from '@angular/core';
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
export class TopicEditFormComponent implements OnInit {
  @ViewChild('topicEditModal') public topicEditModal: ModalDirective;

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

  ngOnInit() {
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
