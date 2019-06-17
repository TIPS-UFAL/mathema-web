import {Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionConst} from '../shared/question-const';
import { QuestionService } from '../shared/question.service';
import {User} from '../../user/shared/models';
import {UserService} from '../../user/shared/services';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html'
})

export class QuestionFormComponent implements OnInit {
  @ViewChild('qtModal', {static: false}) public qtModal: ModalDirective;
  @Output() eventClicked = new EventEmitter<Event>();
  questionConst: QuestionConst;

  difficultyLevel: number;
  isPrivate: boolean;
  statement: string;
  title: string;
  answer: string;
  type: number;
  mainTag: number;
  tags: number[];
  author: User;

  constructor(private questionService: QuestionService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
    console.log('dev');
    userService.user.subscribe((user: User) => {
      this.author = user;
    })
  }

  ngOnInit() {
    this.questionConst = new QuestionConst();
  }


  onSubmit() {
    this.questionService.createQuestion({
      'difficultyLevel': this.difficultyLevel,
      'isPrivate': this.isPrivate,
      'statement': this.statement,
      'title': this.title,
      'answer': this.answer,
      'type': this.type,
      'mainTag': this.mainTag,
      'tags': this.tags,
      'author': this.author.pk
    }).subscribe((data: any) => {
      this.eventClicked.emit(event);
    });
  }

  public show(): void {
    this.qtModal.show();
  }

  public hide(): void {
    this.qtModal.hide();
  }
}
