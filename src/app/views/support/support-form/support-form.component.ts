import {Component, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

import {Support} from '../shared/support.model';
import {SupportService} from '../shared/support.service';
import {UserService} from '../../user/shared/services';
import {User} from '../../user/shared/models';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html'
})

export class SupportFormComponent {
  @ViewChild('supportFormModal') public supportFormModal: ModalDirective;
  title: string;
  type: string;
  content: string;
  user: User;
  id: any;
  // TODO: puxar tipos do model
  tipos = ['Video-aula', 'Texto', 'Link externo']

  constructor(private supportService: SupportService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {

    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    userService.user.subscribe((user: User) => {
      this.user = user
    })
  }




  onSubmit() {
    console.log(this.title);
    console.log(this.type);
    this.supportService.createSupport({
      'title': this.title,
      'type': this.type,
      'content': this.content,
      'topic': this.id,
      'author': this.user.pk}).subscribe((data: any) => {
      this.router.navigate(['/support/', data.id]);
    });
  }

  public show(): void {
    this.supportFormModal.show();
  }

  public hide(): void {
    this.supportFormModal.hide();
  }
}
