import {Component, ViewChild, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';
import { CurriculumService } from 'app/views/curriculum/shared/curriculum.service'
import {UserService} from '../../user/shared/services';
import {User} from '../../user/shared/models';
import {ModalDirective} from 'ngx-bootstrap';
import {TopicService} from '../../topic/shared/topic.service';
import {CurriculumDetailComponent} from '../curriculum-detail/curriculum-detail.component'



@Component({
  selector: 'app-curriculum-edit-form',
  templateUrl: './curriculum-edit-form.component.html'
})
export class CurriculumEditFormComponent implements OnChanges {
  @ViewChild('curriculumEditModal', {static: false}) public curriculumEditModal: ModalDirective;
  @Input() curriculumTitle: string;
  @Input() curriculumDescription: string;

  id: any;
  title= this.curriculumTitle;
  description: string;

  user: User;

  constructor(private curriculumService: CurriculumService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
    userService.user.subscribe((user: User) => {
      this.user = user
    });
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.curriculumTitle !== undefined && changes.curriculumDescription !== undefined) {
      this.title = this.curriculumTitle;
      this.description = this.curriculumDescription;
    }
  }

  onSubmit() {
    this.curriculumService.updateCurriculum({
      'title': this.title,
      'description': this.description,
      'author': this.user.pk
    },
      this.id)
      .subscribe((data: any) => {
      this.router.navigate(['curriculum/list/']);
    });
  }

  public show(): void {
    this.curriculumEditModal.show();
  }

  public hide(): void {
    this.curriculumEditModal.hide();
  }
}
