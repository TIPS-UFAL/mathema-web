import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { QuestionService } from '../shared/question.service';
import { Topic } from 'app/views/topic/shared/topic.model';
import {User} from '../../user/shared/models';
import {UserService} from '../../user/shared/services';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html'
})

export class QuestionFormComponent {
    @ViewChild('qtModal') public qtModal: ModalDirective;
    title: string;
    description: string;
    user: User;
    id: any;
    type;
    difficulty;
    topic: Topic;
    topics: Topic[] = [];
    topicoSelecionado;

    // TODO: puxar tipos do model
    types = ['problemas', 'multipla escolha'];
    difficultys = ['iniciante', 'intermediario', 'avançado'];

    constructor(private questionService: QuestionService,
                private userService: UserService,
                private route: ActivatedRoute,
                private router: Router) {

      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      userService.user.subscribe((user: User) => {
        this.user = user
      })
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
        this.router.navigate(['/question/', data.id]);
        });

    }

  public show(): void {
    this.qtModal.show();
  }

  public hide(): void {
    this.qtModal.hide();
  }
    //     if (this.topicoSelecionado != null && this.tipoAtividade != null) {
    //         // var index = this.tipos.indexOf(this.tipoAtividade)
    //         // index++
    //         this.questionService.createQuestion({'title': this.titulo,
    //                                             'description': this.descricao,
    //                                             'author': this.user.pk,
    //                                             'topic': this.topicoSelecionado.id,
    //                                             'type': 1}).subscribe(() => {
    //                                                 this.router.navigate(['']);
    //                                             });
    //     }
    // }
}
