import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {User} from '../../user/shared/models';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../user/shared/services';
import {QuestionService} from '../shared/question.service';
import {QuestionConst} from '../shared/question-const';

@Component({
  selector: 'app-question-edit-form',
  templateUrl: './question-edit-form.component.html'
})
export class QuestionEditFormComponent implements OnInit, OnChanges {
  @ViewChild('questionEditModal') public questionEditModal: ModalDirective;
  @Output() eventClicked = new EventEmitter<Event>();
  @Input() questionTitle: string;
  @Input() questionDescription: string;
  @Input() questionType: string;
  @Input() questionDifficulty: string;
  @Input() questionId: string;

  id: any;
  title: string;
  description: string;
  type: string;
  difficulty: string;
  user: User;
  qId: any;
  questionConst: QuestionConst;

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
    this.questionConst = new QuestionConst();
    }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.questionTitle !== undefined && changes.questionDescription !== undefined) {
      this.title = this.questionTitle;
      this.description = this.questionDescription;
      this.type = this.questionType;
      this.difficulty = this.questionDifficulty;
      this.qId = this.questionId;
    }
  }

  onSubmit() {
    this.questionService.updateQuestion({
        'title': this.title,
        'description': this.description,
        'type': this.type,
        'difficulty': this.difficulty
      },
      this.qId)
      .subscribe((data: any) => {
        this.eventClicked.emit(event);
      });
  }

  public show(): void {
    this.questionEditModal.show();
  }

  public hide(): void {
    this.questionEditModal.hide();
  }

}
