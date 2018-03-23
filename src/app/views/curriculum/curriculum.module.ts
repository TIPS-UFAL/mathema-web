import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import {CurriculumService} from './shared/curriculum.service';
import {CurriculumListComponent} from './curriculum-list/curriculum-list.component';
import { CurriculumFormComponent } from './curriculum-form/curriculum-form.component';
import { CurriculumDetailComponent } from './curriculum-detail/curriculum-detail.component';
import {GroupModule} from '../group/group.module';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    CommonModule,
    CurriculumRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    GroupModule
  ],
  declarations: [
    CurriculumFormComponent,
    CurriculumListComponent,
    CurriculumDetailComponent
  ],
  providers: [ CurriculumService ]
})
export class CurriculumModule { }
