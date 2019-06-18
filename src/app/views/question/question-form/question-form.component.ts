import {Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionConst} from '../shared/question-const';
import { QuestionService } from '../shared/question.service';
import {User} from '../../user/shared/models';
import {UserService} from '../../user/shared/services';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {Tag} from '../../../shared/tag.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html'
})

export class QuestionFormComponent implements OnInit {
  @ViewChild('qtModal', {static: false}) public qtModal: ModalDirective;
  @Output() eventClicked = new EventEmitter<Event>();
  questionConst: QuestionConst;
  tagsConst: Tag[] = [];

  difficultyLevel: any;
  isPrivate = false;
  statement: string;
  title: string;
  answer: string;
  type: any;
  mainTag: number;
  tags: Tag[];
  author: User;

  /* Drop Down settings*/
  formTagsSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    searchPlaceholderText: 'Pesquisar',
    selectAllText: 'Selecionar todos',
    unSelectAllText: 'Desselecionar todos',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  formMainTagSettings = {
    singleSelection: true,
    idField: 'id',
    textField: 'name',
    itemsShowLimit: 3,
    earchPlaceholderText: 'Pesquisar',
    allowSearchFilter: true
  };

  questionConstSettings = {
    singleSelection: true,
    idField: 'id',
    textField: 'statement',
    itemsShowLimit: 3,
    allowSearchFilter: false
  };


  constructor(private questionService: QuestionService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
    // Todo: get tags from API
    this.tagsConst.push(new Tag(5, 'matemática', 'Matemática'));
    this.tagsConst.push(new Tag(1, 'equação', 'equação de primeiro grau'));

    userService.user.subscribe((user: User) => {
      this.author = user;
    })
  }

  ngOnInit() {
    this.questionConst = new QuestionConst();
  }


  onSubmit() {
    const obj = {
      'difficultyLevel': this.difficultyLevel,
      'isPrivate': this.isPrivate,
      'statement': this.statement,
      'title': this.title,
      'answer': this.answer,
      'type': this.type,
      'mainTag': this.mainTag,
      'tags': this.tags,
      'author': this.author
    };
    console.log(obj);
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
