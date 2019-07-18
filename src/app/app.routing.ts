import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './guards/index';*/

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';
import {AuthGuard} from './auth/services/authentication.guard';

export const routes: Routes = [
  {
    path: '',
    component: FullLayout,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'dashboard-professor',
        loadChildren: () => import('./views/dashboard-professor/dashboard-professor.module').then(m => m.DashboardProfessorModule)
      },
      {
        path: 'curriculum',
        loadChildren: () => import('./views/curriculum/curriculum.module').then(m => m.CurriculumModule)
      },
      {
        path: 'group',
        loadChildren: () => import('./views/group/group.module').then(m => m.GroupModule)
      },
      {
        path: 'classes',
        loadChildren: () => import ('./classes/classes.module').then(m => m.ClassesModule)
      },
      {
        path: 'topic',
        loadChildren: () => import('./views/topic/topic.module').then(m => m.TopicModule)
      },
      {
        path: 'question',
        loadChildren: () => import('./views/question/question.module').then(m => m.QuestionModule)
      },
      {
        path: 'answer',
        loadChildren: () => import('./views/answer/answer.module').then(m => m.AnswerModule)
      },
      {
        path: 'support',
        loadChildren: () => import('./views/support/support.module').then(m => m.SupportModule)
      },
      {
        path: 'quiz',
        loadChildren: () => import('./views/quiz/quiz.module').then(m => m.QuizModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'subject',
        loadChildren: () => import('./views/subject/subject.module').then(m => m.SubjectModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./views/messages/messages.module').then(m => m.MessagesModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./views/settings/settings.module').then(m => m.SettingsModule)
      }
    ]
  },
  {
    path: '',
    component: SimpleLayout,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: 'login',
        loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./views/register/register.module').then(m => m.RegisterModule)
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
