import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { SubjectComponent } from './subject.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectComponent,
    data: {
      title: 'Matéria'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule {}