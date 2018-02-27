import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../shared/question.service';
import { Question } from '../shared/question.model';
import { UserService } from '../../user/shared/services';

@Component({
    selector: 'app-question-detail',
    templateUrl: './question-detail.component.html',
    styleUrls: ['./question-detail.component.scss']
})

export class QuestionDetailComponent implements OnInit {

    public pk
    public title: string
    public description: string
    public author
    public solution

    constructor(private route: ActivatedRoute, private questionService: QuestionService,
                private userService: UserService) {

    }

    ngOnInit() {
        this.pk = parseInt(this.route.snapshot.paramMap.get('id'))

        this.questionService.getQuestion(this.pk).subscribe((data: any) => {
            this.title = data.title
            this.description = data.description
            this.author = data.author
          });
        
        //buscar autor pelo id
    }

    onSubmit() {
        //TODO: usar classe Answer para registrar solução
        console.log(this.solution)
        this.solution = ""
    }
}