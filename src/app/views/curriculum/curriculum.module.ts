import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import {CurriculumService} from './shared/curriculum.service';
import {CurriculumListComponent} from './curriculum-list/curriculum-list.component';
import { CurriculumFormComponent } from './curriculum-form/curriculum-form.component';

@NgModule({
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [
    CurriculumFormComponent,
    CurriculumListComponent
  ],
  providers: [ CurriculumService ]
})
export class CurriculumModule { }
