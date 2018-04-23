import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { TopicFormComponent } from './topic-form/topic-form.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicRoutingModule } from './topic-routing.module';
import { HttpModule } from '@angular/http';
import { TopicService } from 'app/views/topic/shared/topic.service';
import { ModalModule } from 'ngx-bootstrap';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import {QuestionModule} from '../question/question.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TopicEditFormComponent } from './topic-edit-form/topic-edit-form.component';
import {SupportModule} from '../support/support.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    CommonModule,
    TopicRoutingModule,
    HttpModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    QuestionModule,
    SupportModule
  ],
  declarations: [
    TopicFormComponent,
    TopicListComponent,
    TopicDetailComponent,
    TopicEditFormComponent
  ],
  exports: [
    TopicFormComponent,
    TopicListComponent
  ],
  providers: [ TopicService ]
})
export class TopicModule { }
