import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../../user/shared/services';
import { AnswerService } from '../shared/answer.service';
import { Answer } from '../shared/answer.model';

@Component({
  selector: 'app-answer-delete-form',
  templateUrl: './answer-delete-form.component.html'
})
export class AnswerDeleteFormComponent implements OnInit {
  @ViewChild('answerDeleteModal') public answerDeleteModal: ModalDirective;

	id: any;

	constructor(private answerService: AnswerService,
				private router: Router,
				private route: ActivatedRoute) { }

  ngOnInit() { }

  public show(selectedAnswer): void {
    this.id = selectedAnswer.id;
    this.answerDeleteModal.show();
  }

  public hide(): void {
    this.answerDeleteModal.hide();
  }

  onDelete() {
	this.answerService.deleteAnswer(this.id).subscribe((data: any) => {
	    this.router.navigate(['']);
	});
 }
}