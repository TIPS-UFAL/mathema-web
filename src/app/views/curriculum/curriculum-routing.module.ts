import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CurriculumFormComponent } from './curriculum-form/curriculum-form.component';
import { CurriculumListComponent } from './curriculum-list/curriculum-list.component';
import {CurriculumDetailComponent} from './curriculum-detail/curriculum-detail.component';
import {NgxPermissionsGuard} from 'ngx-permissions';


const routes: Routes = [
  {
    path: 'list',
    component: CurriculumListComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        except: ['STUDENT'],
        redirectTo: ''
      }
    },
  },
  {
    path: 'form',
    component: CurriculumFormComponent,
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

