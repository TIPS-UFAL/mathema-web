import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { GroupFormComponent } from './group-form/group-form.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupRoutingModule } from './group-routing.module';
import { HttpModule } from '@angular/http';
import { GroupService } from 'app/views/group/shared/group.service';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule,
    HttpModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [
    GroupFormComponent,
    GroupListComponent
  ],
  providers: [ GroupService ]
})
export class GroupModule { }
