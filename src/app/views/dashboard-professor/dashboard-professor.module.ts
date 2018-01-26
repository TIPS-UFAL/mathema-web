import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardProfessorComponent } from './dashboard-professor.component';
import { DashboardProfessorRoutingModule } from './dashboard-professor-routing.module';

@NgModule({
  imports: [
    DashboardProfessorRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ DashboardProfessorComponent ]
})
export class DashboardProfessorModule { }
