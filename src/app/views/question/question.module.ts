import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionService } from 'app/views/question/shared/question.service';
import {TopicFormComponent} from '../topic/topic-form/topic-form.component';
import {TopicListComponent} from '../topic/topic-list/topic-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { QuestionEditFormComponent } from './question-edit-form/question-edit-form.component';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    CommonModule,
    QuestionRoutingModule,
    HttpModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [
    QuestionFormComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    QuestionEditFormComponent
  ],
  exports: [
    QuestionFormComponent,
    QuestionListComponent
  ],
  providers: [ QuestionService ]
})
export class QuestionModule { }
