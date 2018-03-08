import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AnswerService } from '../shared/answer.service';
import { Answer } from '../shared/answer.model';
import { QuestionService } from '../../question/shared/question.service';

@Component({
    selector: 'app-answer-list',
    templateUrl: './answer-list.component.html',
    styleUrls: ['./answer-list.component.css']
})

export class AnswerListComponent implements OnInit {

    answers: Answer[] = []
    public question
    
    constructor(answerService: AnswerService, private questionService: QuestionService,
        private router: Router) {
        
        answerService.getAnswers().subscribe((data: any) => {
            this.answers = data
            console.log(data)
        })
    }

    goTo(id: number) {

    }

    ngOnInit() {
        
    }

    onSelect(answer) {
        console.log(answer.id)
        console.log(answer.answer)
        console.log(answer.activity)
        console.log(answer.author)
        console.log(answer.evaluation)
        
        this.router.navigate(['/answer', answer.id])

        //TODO: colocar data no cadastro da submissão
    }
 }