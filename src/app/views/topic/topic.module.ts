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

@NgModule({
  imports: [
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
  providers: [ TopicService ]
})
export class TopicModule { }
