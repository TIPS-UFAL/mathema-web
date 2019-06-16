import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AnswerRoutingModule } from './answer-routing.module';
import { AnswerService } from './shared/answer.service';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerDetailComponent } from './answer-detail/answer-detail.component';
import { ModalModule } from 'ngx-bootstrap';
import { AnswerEditFormComponent } from './answer-edit-form/answer-edit-form.component';
import { AnswerDeleteFormComponent } from './answer-delete-form/answer-delete-form.component';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    AnswerRoutingModule,
    HttpClientModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [
    AnswerListComponent,
    AnswerDetailComponent,
    AnswerEditFormComponent,
    AnswerDeleteFormComponent
  ],
  exports: [
    AnswerEditFormComponent,
    AnswerDeleteFormComponent
  ],
  providers: [ AnswerService ]
})
export class AnswerModule { }
