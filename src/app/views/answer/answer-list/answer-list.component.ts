import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { AnswerService } from '../shared/answer.service';
import { Answer } from '../shared/answer.model';
import { QuestionService } from '../../question/shared/question.service';
import { UserService } from '../../user/shared/services/user.service'

@Component({
    selector: 'app-answer-list',
    templateUrl: './answer-list.component.html',
    styleUrls: ['./answer-list.component.css']
})

export class AnswerListComponent implements OnInit {

    //TODO: colocar data no cadastro da submissão
    
    public answers: Answer[]
    public question_id
    
    constructor(answerService: AnswerService, private questionService: QuestionService,
        private userService: UserService, private router: Router, private route: ActivatedRoute) {
        
        this.question_id = this.route.snapshot.paramMap.get('question_id')
        answerService.getAnswers(this.question_id).subscribe((data: any) => {
            this.answers = data

            for (let answer of this.answers) {
                this.userService.findUser(answer.author).subscribe((user: any) => {
                    answer.author = user.username
                })
            }
        })
    }

    goTo(id: number) { }

    ngOnInit() { }

    onSelect(answer) {
        this.router.navigate(['/answer', answer.id])
    }
 }