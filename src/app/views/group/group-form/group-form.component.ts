import { Component, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { Group } from '../shared/group.model';
import { GroupService } from '../shared/group.service';
import { Curriculum } from 'app/views/curriculum/shared/curriculum.model';
import { CurriculumService } from 'app/views/curriculum/shared/curriculum.service'
import {UserService} from '../../user/shared/services';
import {User} from '../../user/shared/models';

@Component({
    selector: 'app-group-form',
    templateUrl: './group-form.component.html'
})

export class GroupFormComponent {
  @ViewChild('gpModal') public gpModal: ModalDirective;

  title: string;
  visible: boolean;
  user: User;
  idCurriculum: number;
  idGroup: string;

  constructor(private groupService: GroupService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
    this.idCurriculum = parseInt(this.route.snapshot.paramMap.get('id'));
      userService.user.subscribe((user: User) => {
        this.user = user
      });
  }

  onSubmit() {
    this.groupService.createGroup({'title': this.title, 'curriculum': this.idCurriculum, 'teacher': this.user.pk})
      .subscribe((group: Group) => {
        this.idGroup = group.group_key;
        this.router.navigate(['group/' + this.idGroup + '/']);
      });
  }

  public show(): void {
    this.gpModal.show();
  }

  public hide(): void {
    this.gpModal.hide();
  }
}
