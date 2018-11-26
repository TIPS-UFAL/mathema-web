import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { Question } from 'app/views/question/shared/question.model';
import { QuestionService } from 'app/views/question/shared/question.service';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionConst} from '../shared/question-const';
import {Curriculum} from '../../curriculum/shared/curriculum.model';
import {CurriculumService} from '../../curriculum/shared/curriculum.service';
import {Topic} from '../../topic/shared/topic.model';
import {TopicService} from '../../topic/shared/topic.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit, OnChanges {

  @Input() event: Question;
  questions: Question[] = [];
  topic: Topic;
  id: any;
  public author;
  questionConst: QuestionConst;

  constructor(private questionService: QuestionService,
              private topicService: TopicService,
              private route: ActivatedRoute,
              private router: Router) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.topicService.getTopic(this.id).subscribe((data: any) => {
      this.topic = data;
      console.log(this.topic);
    });
    questionService.getQuestions(this.id).subscribe((data: any) => {
      this.questions = data
    })
  }

  goTo(id: number) {

  }

  ngOnInit() {
    this.questionConst = new QuestionConst();
  }

  ngOnChanges() {
  }

  onSelect(question) {
    this.router.navigate(['/question', question.id])
  }

  onDelete(questionId) {
    console.log(questionId);
    this.questionService.deleteQuestion(questionId).subscribe((data: any) => {
      this.router.navigate(['/topic/' + this.id]);
    });
  }

  checkSubmissions(question) {
    this.router.navigate(['/answer/list', {question_id: question.id}])
  }
//
  getBtnClass(difficulty: string) {
    switch (difficulty) {
      case this.questionConst.difficulties[0]:
        return 'btn-easy';
      case this.questionConst.difficulties[1]:
        return 'btn-medium';
      case this.questionConst.difficulties[2]:
        return 'btn-hard';

    }
  }

  getCardClass(difficulty: string) {
    switch (difficulty) {
      case 'iniciante':
        return 'card-accent-easy';
      case 'intermediario':
        return 'card-accent-medium';
      case 'avançado':
        return 'card-accent-hard';

    }
  }
}
