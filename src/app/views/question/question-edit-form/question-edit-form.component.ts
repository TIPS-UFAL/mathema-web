import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {User} from '../../user/shared/models';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../user/shared/services';
import {QuestionService} from '../shared/question.service';

@Component({
  selector: 'app-question-edit-form',
  templateUrl: './question-edit-form.component.html'
})
export class QuestionEditFormComponent implements OnInit {
  @ViewChild('questionEditModal') public questionEditModal: ModalDirective;
  @Input() questionTitle: string;
  @Input() questionDescription: string;

  id: any;
  title: string;
  description: string;
  user: User;

  constructor(private questionService: QuestionService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
    userService.user.subscribe((user: User) => {
      this.user = user
    });
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.title = this.questionTitle;
    this.description = this.questionDescription;
  }

  onSubmit() {
    this.questionService.updateQuestion({
        'title': this.title,
        'description': this.description
      },
      this.id)
      .subscribe((data: any) => {
        this.router.navigate(['']);
      });
  }

  public show(): void {
    this.questionEditModal.show();
  }

  public hide(): void {
    this.questionEditModal.hide();
  }

}
