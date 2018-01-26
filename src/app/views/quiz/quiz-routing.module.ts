import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';

const routes: Routes = [
  {
    path: '',
    component: QuizFormComponent,
  },
  {
    path: 'form',
    component: QuizFormComponent,
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
export class QuizRoutingModule {}
