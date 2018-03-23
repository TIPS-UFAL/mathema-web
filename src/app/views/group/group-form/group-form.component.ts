import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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

  titulo: string;
  descricao: string;
  // suporte?: GroupSuport;
  // atividades?: GroupActivity;
  groupoPai?: Group;
  user: User;

  groups: Group[] = [];

  constructor(private groupService: GroupService,
              private userService: UserService,
              private router: Router) {

      groupService.getGroups().subscribe((data: any) => {
          this.groups = data;
      });

      userService.user.subscribe((user: User) => {
        this.user = user
      });
  }

  onSubmit() {
    // verifica se é subgroupo
    if(this.groupoPai == null) {
      console.log("entrei")
      this.groupService.createGroup({'title': this.titulo,
        'description': this.descricao,
        'author': this.user.pk}).subscribe(() => {
        this.router.navigate(['']);
      });
    } else {
      console.log("n entrei");
      this.groupService.createGroup({'title': this.titulo,
        'description': this.descricao,
        'author': this.user.pk,
        'parent_group': this.groupoPai.pk}).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }

  public show(): void {
    this.gpModal.show();
  }

  public hide(): void {
    this.gpModal.hide();
  }
}
