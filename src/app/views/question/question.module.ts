import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionService } from 'app/views/question/shared/question.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { QuestionEditFormComponent } from './question-edit-form/question-edit-form.component';
import { AnswerModule } from '../answer/answer.module';
import {UiSwitchModule} from 'ngx-toggle-switch';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {AccordionModule} from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    CommonModule,
    QuestionRoutingModule,
    HttpClientModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    AnswerModule,
    UiSwitchModule,
    NgMultiSelectDropDownModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule
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
