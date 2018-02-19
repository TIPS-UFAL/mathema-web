import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CurriculumFormComponent } from './curriculum-form/curriculum-form.component';
import { CurriculumListComponent } from './curriculum-list/curriculum-list.component';
import {CurriculumDetailComponent} from './curriculum-detail/curriculum-detail.component';


const routes: Routes = [
  {
    path: 'list',
    component: CurriculumListComponent,
  },
  {
    path: 'form',
    component: CurriculumFormComponent,
  },
  {
    path: ':id',
    component: CurriculumDetailComponent,
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
export class CurriculumRoutingModule { }

