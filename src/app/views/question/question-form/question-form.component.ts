import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionConst} from '../shared/question-const';
import { QuestionService } from '../shared/question.service';
import { Topic } from 'app/views/topic/shared/topic.model';
import {User} from '../../user/shared/models';
import {UserService} from '../../user/shared/services';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html'
})

export class QuestionFormComponent implements OnInit {
    @ViewChild('qtModal') public qtModal: ModalDirective;
    @Output() eventClicked = new EventEmitter<Event>();
    title: string;
    description: string;
    user: User;
    id: any;
    type;
    difficulty;
    topic: Topic;
    topics: Topic[] = [];
    topicoSelecionado;
    questionConst: QuestionConst;


    constructor(private questionService: QuestionService,
                private userService: UserService,
                private route: ActivatedRoute,
                private router: Router) {

      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      userService.user.subscribe((user: User) => {
        this.user = user
      })
    }

    ngOnInit() {
      this.questionConst = new QuestionConst();
    }


    onSubmit() {
      // TODO: pegar id correto do curriculo
      this.questionService.createQuestion({
        'title': this.title,
        'description': this.description,
        'author': this.user.pk,
        'topic': this.id,
        'type': this.type,
        'difficulty': this.difficulty
        }).subscribe((data: any) => {
        this.eventClicked.emit(data);
        });
    }

  public show(): void {
    this.qtModal.show();
  }

  public hide(): void {
    this.qtModal.hide();
  }
}
