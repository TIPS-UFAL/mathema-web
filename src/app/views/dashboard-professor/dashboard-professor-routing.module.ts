import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardProfessorComponent } from './dashboard-professor.component';
import {NgxPermissionsGuard} from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: DashboardProfessorComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['TEACHER'],
        redirectTo: ''
      },
      title: 'Dashboard do Professor'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardProfessorRoutingModule {}
