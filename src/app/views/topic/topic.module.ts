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
import { ModalModule } from "ngx-bootstrap";

@NgModule({
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    TopicRoutingModule,
    HttpModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [
    TopicFormComponent,
    TopicListComponent
  ],
  exports: [
    TopicFormComponent,
    TopicListComponent
  ],
  providers: [ TopicService ]
})
export class TopicModule { }
