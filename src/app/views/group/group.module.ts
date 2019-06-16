import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { GroupFormComponent } from './group-form/group-form.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupService } from 'app/views/group/shared/group.service';
import {AlertModule, CollapseModule, ModalModule, TabsModule, TooltipModule} from 'ngx-bootstrap';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import {TopicModule} from '../topic/topic.module';
import {NgxPermissionsModule} from 'ngx-permissions';
import {FilterPipe} from './shared/filter.pipe';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CommonModule,
    GroupRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    TopicModule
  ],
  declarations: [
    GroupFormComponent,
    GroupListComponent,
    GroupDetailComponent,
    FilterPipe
  ],
  exports: [
    GroupFormComponent
  ],
  providers: [ GroupService ]
})
export class GroupModule { }
