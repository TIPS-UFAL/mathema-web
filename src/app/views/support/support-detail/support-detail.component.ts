import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

import {Support} from '../shared/support.model';
import {SupportService} from '../shared/support.service';
import {UserService} from '../../user/shared/services';
import {User} from '../../user/shared/models';
import {ModalDirective} from 'ngx-bootstrap';
import {Curriculum} from '../../curriculum/shared/curriculum.model';

@Component({
  selector: 'app-support-detail',
  templateUrl: './support-detail.component.html'
})

export class SupportDetailComponent implements OnChanges {
  @ViewChild('supportDetailModal') public supportDetailModal: ModalDirective;
  @Input() supportTitle: string;
  @Input() supportContent: string;
  @Input() supportType: string;
  title: string;
  type: string;
  content: string;

  support: Support;
  user: User;
  id: any;
  // TODO: puxar tipos do model
  tipos = ['Video-aula', 'Texto', 'Link externo']

  constructor(private supportService: SupportService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
    userService.user.subscribe((user: User) => {
      this.user = user
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.supportTitle !== undefined && changes.supportContent !== undefined && changes.supportType !== undefined) {
      this.title = this.supportTitle;
      this.content = this.supportContent;
      this.type = this.supportType;
    }
  }

  public show(): void {
    this.supportDetailModal.show();
  }

  public hide(): void {
    this.supportDetailModal.hide();
  }
}
