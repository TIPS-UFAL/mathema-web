import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SupportListComponent } from './support-list/support-list.component';
import { SupportFormComponent } from './support-form/support-form.component';
import { SupportDetailComponent } from './support-detail/support-detail.component';
import {NgxPermissionsGuard} from 'ngx-permissions';

const routes: Routes = [
  {
    path: 'list',
    component: SupportListComponent,
  },
  {
    path: 'form',
    component: SupportFormComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        except: ['STUDENT'],
        redirectTo: ''
      }
    }
  },
  {
    path: ':id',
    component: SupportDetailComponent
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
export class SupportRoutingModule {}
