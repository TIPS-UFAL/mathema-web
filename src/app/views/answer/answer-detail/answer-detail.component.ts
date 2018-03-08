import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AnswerService } from '../shared/answer.service';
import { QuestionService } from '../../question/shared/question.service';
import { UserService } from '../../user/shared/services';

@Component({
	selector: 'app-answer-detail',
	templateUrl: './answer-detail.component.html',
	styleUrls: ['./answer-detail.component.scss']
})

export class AnswerDetailComponent implements OnInit {

	public pk
	public activity
	public activityTitle
	public author
	public authorName
	public answer
	public grades = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	public note
	public evaluation
	
	constructor(private route: ActivatedRoute, private answerService: AnswerService,
				private questionService: QuestionService, private userService: UserService,
				private answerRoute: Router) {
		
	}

	ngOnInit() {
		this.pk = parseInt(this.route.snapshot.paramMap.get('id'))

		this.answerService.getAnswer(this.pk).subscribe((data: any) => {

			this.questionService.getQuestion(data.activity).subscribe((activity: any) => {
				this.activityTitle = activity.title
			})

			this.userService.findUser(data.author).subscribe((user: any) => {
				this.authorName = user.username
			})

			this.author = data.author
			this.answer = data.answer

			console.log(data)
		})
	}

	onSubmit() {
		// TODO: criar campo no model para note
		if(this.evaluation != null) {
			this.answerService.updateAnswer({
				'answer': this.answer,
				'activity': this.activity,
				'author': this.author,
				'evaluation': this.evaluation
			}, this.pk).subscribe(() => {
				this.answerRoute.navigate['']
			})
		}
	}
}