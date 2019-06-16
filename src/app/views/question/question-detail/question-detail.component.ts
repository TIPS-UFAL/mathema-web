import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Question } from '../shared/question.model';
import { QuestionService } from '../shared/question.service';
import { Answer } from '../../answer/shared/answer.model';
import { AnswerService } from '../../answer/shared/answer.service';
import { User } from '../../user/shared/models';
import { UserService } from '../../user/shared/services';
import { QuestionFormComponent } from '../question-form/question-form.component';
import { TopicFormComponent } from '../../topic/topic-form/topic-form.component';
import { AnswerEditFormComponent } from '../../answer/answer-edit-form/answer-edit-form.component';

@Component({
    selector: 'app-question-detail',
    templateUrl: './question-detail.component.html',
    styleUrls: ['./question-detail.component.scss']
})

export class QuestionDetailComponent implements OnInit {
  @ViewChild('questionEditModal', /* TODO: add static flag */ {static: false}) public questionEditModal: QuestionFormComponent
  @ViewChild('answerEditModal', /* TODO: add static flag */ {static: false}) public answerEditModal: AnswerEditFormComponent

  question: Question;
  pk;
  title: string;
  description: string;
  difficulty: string;
  author;
  category;
  solution;
  public answers = [];

  // TODO: puxar tipos do model
  tipos = ['problemas', 'multipla escolha'];

  user: User;

  alreadyAnswered = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private answerRoute: Router,
                private questionService: QuestionService,
                private userService: UserService,
                private answerService: AnswerService) { }

    ngOnInit() {
        this.pk = parseInt(this.route.snapshot.paramMap.get('id'));

        this.questionService.getQuestion(this.pk).subscribe((data: any) => {
            this.question = data;

            this.userService.findUser(parseInt(data.author)).subscribe((questionAuthor: any) => {
                this.author = questionAuthor.username;
            });

            this.userService.user.subscribe((user: User) => {
                this.user = user;
            });

            this.answerService.getAnswers(this.pk).subscribe((answersList: any) => {
                for (const answer of answersList) {
                    if (this.user.pk == answer.author) {
                        this.alreadyAnswered = true;
                        this.answers.push(answer);
                    }
                }
            });
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

        this.solution = '';
    }

    onDelete() {
      this.questionService.deleteQuestion(this.pk).subscribe((data: any) => {
        this.router.navigate(['/curriculum/list/']);
      });
    }
}
