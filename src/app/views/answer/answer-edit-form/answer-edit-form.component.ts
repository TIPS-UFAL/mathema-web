import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../../user/shared/services';
import { AnswerService } from '../shared/answer.service';
import { Answer } from '../shared/answer.model';

@Component({
  selector: 'app-answer-edit-form',
  templateUrl: './answer-edit-form.component.html'
})
export class AnswerEditFormComponent implements OnInit {
  @ViewChild('answerEditModal') public answerEditModal: ModalDirective;
	@Input() answerText: string;

	id: any;
	answer: string;

	constructor(private answerService: AnswerService,
				private router: Router,
				private route: ActivatedRoute) { }

  ngOnInit() { }

  onSubmit() {
    this.answerService.updateAnswer({
        'answer': this.answer
      },
      this.id)
      .subscribe((data: any) => {
        this.router.navigate(['']);
      });
  }

  public show(selectedAnswer): void {
    this.id = selectedAnswer.id;
    this.answer = selectedAnswer.answer;
    this.answerEditModal.show();
  }

  public hide(): void {
    this.answerEditModal.hide();
  }
}
