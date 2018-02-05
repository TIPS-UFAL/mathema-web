import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { HttpModule } from '@angular/http';
import { QuizService } from 'app/views/quiz/shared/quiz.service';
import {QuizListComponent} from './quiz-list/quiz-list.component';

@NgModule({
  imports: [
    CommonModule,
    QuizRoutingModule,
    HttpModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [
    QuizFormComponent,
    QuizListComponent
  ],
  providers: [ QuizService ]
})
export class QuizModule { }
