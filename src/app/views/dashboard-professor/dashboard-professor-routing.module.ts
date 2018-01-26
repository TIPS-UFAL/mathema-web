import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardProfessorComponent } from './dashboard-professor.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardProfessorComponent,
    data: {
      title: 'Dashboard do Professor'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardProfessorRoutingModule {}
