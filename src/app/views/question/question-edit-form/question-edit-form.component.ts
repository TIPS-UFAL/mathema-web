import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {User} from '../../user/shared/models';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../user/shared/services';
import {QuestionService} from '../shared/question.service';

@Component({
  selector: 'app-question-edit-form',
  templateUrl: './question-edit-form.component.html'
})
export class QuestionEditFormComponent implements OnChanges {
  @ViewChild('questionEditModal') public questionEditModal: ModalDirective;
  @Input() questionTitle: string;
  @Input() questionDescription: string;
  @Input() questionType: string;
  @Input() questionId: string;

  id: any;
  title: string;
  description: string;
  user: User;
  qId: any;

  constructor(private questionService: QuestionService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
    userService.user.subscribe((user: User) => {
      this.user = user
    });
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.questionTitle !== undefined && changes.questionDescription !== undefined) {
      this.title = this.questionTitle;
      this.description = this.questionDescription;
      this.qId = this.questionId;
    }
  }

  onSubmit() {
    this.questionService.updateQuestion({
        'title': this.title,
        'description': this.description
      },
      this.qId)
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
