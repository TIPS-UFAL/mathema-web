import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import {CurriculumService} from './shared/curriculum.service';
import {CurriculumListComponent} from './curriculum-list/curriculum-list.component';
import { CurriculumFormComponent } from './curriculum-form/curriculum-form.component';
import { CurriculumDetailComponent } from './curriculum-detail/curriculum-detail.component';
import {GroupModule} from '../group/group.module';
import {TopicModule} from '../topic/topic.module';
import { CurriculumEditFormComponent } from './curriculum-edit-form/curriculum-edit-form.component';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    CommonModule,
    CurriculumRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    GroupModule,
    FormsModule,
    TopicModule
  ],
  declarations: [
    CurriculumFormComponent,
    CurriculumListComponent,
    CurriculumDetailComponent,
    CurriculumEditFormComponent
  ],
  exports: [
    CurriculumEditFormComponent
  ],
  providers: [ CurriculumService ]
})
export class CurriculumModule { }
