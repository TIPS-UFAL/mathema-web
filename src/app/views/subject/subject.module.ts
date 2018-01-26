import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SubjectComponent } from './subject.component';
import { SubjectRoutingModule } from './subject-routing.module';

@NgModule({
  imports: [
    SubjectRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [ SubjectComponent ]
})
export class SubjectModule { }