import { Component, OnInit } from '@angular/core';
import { Quiz } from 'app/views/quiz/shared/quiz.model';
import { QuizService } from 'app/views/quiz/shared/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {
    quizService.getQuizzes().subscribe((data: any) => {
      this.quizzes = data;
    })
  }

  goTo(id: number) {

  }

  ngOnInit() {
  }

}
