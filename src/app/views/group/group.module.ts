import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { GroupFormComponent } from './group-form/group-form.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupService } from 'app/views/group/shared/group.service';
import {ModalModule} from 'ngx-bootstrap';
import { GroupDetailComponent } from './group-detail/group-detail.component';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    GroupRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [
    GroupFormComponent,
    GroupListComponent,
    GroupDetailComponent
  ],
  exports: [
    GroupFormComponent
  ],
  providers: [ GroupService ]
})
export class GroupModule { }
