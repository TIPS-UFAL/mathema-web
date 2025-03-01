import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';

import { AnswerRoutingModule } from './answer-routing.module';
import { AnswerService } from './shared/answer.service'
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerDetailComponent } from './answer-detail/answer-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AnswerRoutingModule,
    HttpModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [
    AnswerListComponent,
    AnswerDetailComponent
  ],
  providers: [ AnswerService ]
})
export class AnswerModule { }
