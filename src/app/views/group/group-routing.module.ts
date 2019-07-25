import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupListComponent } from './group-list/group-list.component';
import { GroupFormComponent } from './group-form/group-form.component';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {GroupDetailComponent} from './group-detail/group-detail.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: GroupListComponent,
  },
  {
    path: 'form',
    component: GroupFormComponent,
   // canActivate: [NgxPermissionsGuard],
   //  data: {
   //    permissions: {
   //      except: ['STUDENT'],
   //      redirectTo: ''
   //    }
   //  },
  },
  {
    path: ':idGroup',
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
  ]
})
export class GroupRoutingModule {}
