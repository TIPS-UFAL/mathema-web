import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionFormComponent,
  },
  {
    path: 'form',
    component: QuestionFormComponent,
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
export class QuestionRoutingModule {}
