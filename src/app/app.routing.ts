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
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'dashboard-professor',
        loadChildren: './views/dashboard-professor/dashboard-professor.module#DashboardProfessorModule'
      },
      {
        path: 'curriculum',
        loadChildren: './views/curriculum/curriculum.module#CurriculumModule'
      },
      {
        path: 'topic',
        loadChildren: './views/topic/topic.module#TopicModule'
      },
      {
        path: 'question',
        loadChildren: './views/question/question.module#QuestionModule'
      },
      {
        path: 'quiz',
        loadChildren: './views/quiz/quiz.module#QuizModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'subject',
        loadChildren: './views/subject/subject.module#SubjectModule'
      },
      {
        path: 'messages',
        loadChildren: './views/messages/messages.module#MessagesModule'
      },
      {
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule'
      },
      {
        path: 'settings',
        loadChildren: './views/settings/settings.module#SettingsModule'
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
        loadChildren: './views/login/login.module#LoginModule'
      },
      {
        path: 'pages',
        loadChildren: './views/pages/pages.module#PagesModule'
      },
      {
        path: 'register',
        loadChildren: './views/login/register.module#RegisterModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

/*export const routing = RouterModule.forRoot(appRoutes);*/
