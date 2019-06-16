import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

import {Support} from '../shared/support.model';
import {SupportService} from '../shared/support.service';
import {UserService} from '../../user/shared/services';
import {User} from '../../user/shared/models';
import {ModalDirective} from 'ngx-bootstrap';
import {Quill} from 'quill';

@Component({
  selector: 'app-support-edit-form',
  templateUrl: './support-edit-form.component.html'
})

export class SupportEditFormComponent implements OnChanges {
  @ViewChild('supportEditFormModal', /* TODO: add static flag */ {static: false}) public supportEditFormModal: ModalDirective;
  @Input() supportTitle: string;
  @Input() supportContent: string;
  @Input() supportType: string;
  @Input() supportId: number;

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: 'insert content...'
  };

  title: string;
  type: string;
  content: string;
  user: User;
  id: any;
  sId: any;
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes.supportTitle !== undefined && changes.supportContent !== undefined && changes.supportType !== undefined) {
      this.title = this.supportTitle;
      this.type = this.supportType;
      this.content = this.supportContent;
      this.sId = this.supportId;
    }
  }

  onSubmit() {
    this.supportService.updateSupport({
      'title': this.title,
      'type': this.type,
      'content': this.content,
      'topic': this.id,
      'author': this.user.pk}, this.sId).subscribe((data: any) => {
      this.router.navigate(['/support/', data.id]);
    });

  }
  public show(): void {
    this.supportEditFormModal.show();
  }

  public hide(): void {
    this.supportEditFormModal.hide();
  }

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }

}
