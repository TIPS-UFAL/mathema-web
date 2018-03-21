import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GroupListComponent } from './group-list/group-list.component';
import { GroupFormComponent } from './group-form/group-form.component';
import {NgxPermissionsGuard} from 'ngx-permissions';

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
  }
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
