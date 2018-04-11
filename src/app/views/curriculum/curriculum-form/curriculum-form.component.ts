import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Curriculum } from '../shared/curriculum.model';
import { CurriculumService } from '../shared/curriculum.service';
import {User} from '../../user/shared/models';
import {UserService} from '../../user/shared/services';


@Component({
    selector: 'app-curriculum-form',
    templateUrl: './curriculum-form.component.html'
})

export class CurriculumFormComponent {

  title: string;
  description: string;
  user: User;

  constructor(private curriculumService: CurriculumService,
    private router: Router, private userService: UserService) {
      userService.user.subscribe((user: User) => {
        this.user = user
      });
  }

  onSubmit() {
    this.curriculumService.createCurriculum({
      'title': this.title,
      'description': this.description,
      'author': this.user.pk
    })
        .subscribe((data: any) => {
          this.router.navigate(['/curriculum/list']);
        });
  }
}

