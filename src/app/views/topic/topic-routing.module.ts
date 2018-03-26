import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicFormComponent } from './topic-form/topic-form.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {CurriculumDetailComponent} from '../curriculum/curriculum-detail/curriculum-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: TopicListComponent,
  },
  {
    path: 'form',
    component: TopicFormComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        except: ['STUDENT'],
        redirectTo: ''
      }
    },
  },
  {
    path: ':id',
    component: TopicDetailComponent,
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
export class TopicRoutingModule {}
