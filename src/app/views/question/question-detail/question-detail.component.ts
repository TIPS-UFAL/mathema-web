import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../shared/question.service';
import { Question } from '../shared/question.model';
import { UserService } from '../../user/shared/services';
import { AnswerService } from '../../answer/shared/answer.service';
import { User } from '../../user/shared/models';
import {TopicFormComponent} from '../../topic/topic-form/topic-form.component';
import {QuestionFormComponent} from '../question-form/question-form.component';

@Component({
    selector: 'app-question-detail',
    templateUrl: './question-detail.component.html',
    styleUrls: ['./question-detail.component.scss']
})

export class QuestionDetailComponent implements OnInit {
  @ViewChild('questionEditModal') public questionEditModal: QuestionFormComponent;

  public pk;
  public title: string;
  public description: string;
  public author;
  public category;
  public solution;

  // TODO: puxar tipos do model
  tipos = ['problemas', 'multipla escolha'];

  user: User;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private answerRoute: Router,
                private questionService: QuestionService,
                private userService: UserService,
                private answerService: AnswerService) {
        this.userService.getUser().subscribe((user: User) => {
            this.user = user;
        })
    }

    ngOnInit() {
        this.pk = parseInt(this.route.snapshot.paramMap.get('id'));

        this.questionService.getQuestion(this.pk).subscribe((data: any) => {
            this.title = data.title;
            this.description = data.description;
            this.category = this.tipos[data.activity_type - 1];

            this.userService.findUser(parseInt(data.author)).subscribe((user: any) => {
                this.author = user.username;
            })
          });
    }

    onSubmit() {

        this.answerService.createAnswer({
            'answer': this.solution,
            'activity': this.pk,
            'author': this.user.pk
        }).subscribe(() => {
            this.answerRoute.navigate(['']);
        })

        this.solution = ''
    }

    onDelete() {
      this.questionService.deleteQuestion(this.pk).subscribe((data: any) => {
        this.router.navigate(['/curriculum/list/']);
      });
    }
}
