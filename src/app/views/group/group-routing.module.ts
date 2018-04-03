import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GroupListComponent } from './group-list/group-list.component';
import { GroupFormComponent } from './group-form/group-form.component';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {CurriculumDetailComponent} from '../curriculum/curriculum-detail/curriculum-detail.component';
import {GroupDetailComponent} from './group-detail/group-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: GroupListComponent,
  },
  {
    path: 'form',
    component: GroupFormComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        except: ['STUDENT'],
        redirectTo: ''
      }
    },
  },
  {
    path: 'c/:id/g/:idGroup',
    component: GroupDetailComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class GroupRoutingModule {}
