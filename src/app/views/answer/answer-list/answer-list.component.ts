import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AnswerService } from '../shared/answer.service';
import { Answer } from '../shared/answer.model';

@Component({
    selector: 'app-answer-list',
    templateUrl: './answer-list.component.html',
    styleUrls: ['./answer-list.component.css']
})

export class AnswerListComponent implements OnInit {

    answers: Answer[] = []
    
    constructor(answerService: AnswerService, private router: Router) {
        answerService.getAnswers().subscribe((data: any) => {
            this.answers = data
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

        //colocar data no cadastro da submissão
    }
 }