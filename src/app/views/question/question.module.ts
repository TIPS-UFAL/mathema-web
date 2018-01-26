import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionRoutingModule } from './question-routing.module';
import { HttpModule } from '@angular/http';
import { QuestionService } from 'app/views/question/shared/question.service';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    HttpModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [ QuestionFormComponent ],
  providers: [ QuestionService ]
})
export class QuestionModule { }