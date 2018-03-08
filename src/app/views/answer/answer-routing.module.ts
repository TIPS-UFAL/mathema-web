import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerDetailComponent } from './answer-detail/answer-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: AnswerListComponent
  },
  {
    path: ':id',
    component: AnswerDetailComponent
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
export class AnswerRoutingModule { }