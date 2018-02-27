import { Component, OnInit } from '@angular/core';
import { Question } from 'app/views/question/shared/question.model';
import { QuestionService } from 'app/views/question/shared/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[] = []

  constructor(private questionService: QuestionService, private router: Router) {
    questionService.getQuestions().subscribe((data: any) => {
      this.questions = data
      console.log(data)
    })
  }

  goTo(id: number) {

  }

  ngOnInit() {
  }

  onSelect(question) {
    console.log('oi')
    console.log(question.id)
    console.log(question.title)
    console.log(question.description)
    this.router.navigate(['/question', question.id])
  }
}
