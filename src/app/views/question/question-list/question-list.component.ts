import { Component, OnInit } from '@angular/core';
import { Question } from 'app/views/question/shared/question.model';
import { QuestionService } from 'app/views/question/shared/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[] = [];

  constructor(private questionService: QuestionService) {
    questionService.getQuestions().subscribe((data: any) => {
      this.questions = data;
    })
  }

  goTo(id: number) {

  }

  ngOnInit() {
  }

}
