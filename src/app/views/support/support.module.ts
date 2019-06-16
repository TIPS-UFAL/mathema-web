import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuillEditorModule } from 'ngx-quill-editor';

import { SupportFormComponent } from './support-form/support-form.component';
import { SupportListComponent } from './support-list/support-list.component';
import { SupportDetailComponent } from './support-detail/support-detail.component';
import { SupportRoutingModule } from './support-routing.module';
import { SupportService } from 'app/views/support/shared/support.service';
import {TopicFormComponent} from '../topic/topic-form/topic-form.component';
import {TopicListComponent} from '../topic/topic-list/topic-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { SupportEditFormComponent } from './support-edit-form/support-edit-form.component';

@NgModule({
  imports: [
    QuillEditorModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    CommonModule,
    SupportRoutingModule,
    HttpClientModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
  ],
  declarations: [
    SupportFormComponent,
    SupportListComponent,
    SupportDetailComponent,
    SupportEditFormComponent
  ],
  exports: [
    SupportFormComponent,
    SupportListComponent,
    SupportDetailComponent
  ],
  providers: [ SupportService ]
})
export class SupportModule { }
