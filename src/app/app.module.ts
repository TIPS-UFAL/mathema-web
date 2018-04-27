import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

/*import { HttpModule } from '@angular/http';

import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';*/

import { AppComponent } from './app.component';


// Import containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

const APP_CONTAINERS = [
  FullLayout,
  SimpleLayout
]

// Import components
import {
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer

} from './components';

const APP_COMPONENTS = [
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer
]

// Import directives
import {
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CurriculumModule } from './views/curriculum/curriculum.module';
import {AuthenticationService} from './auth/services';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './auth/services/authentication.guard';
import {UserService} from './views/user/shared/services';
import {SharedModule} from './shared/shared.module';
import {HttpService} from './shared/http.service';
import {TopicService} from './views/topic/shared/topic.service';
import {QuestionService} from './views/question/shared/question.service';
import { AnswerService } from './views/answer/shared/answer.service';
import {CurriculumService} from './views/curriculum/shared/curriculum.service';
import {QuizService} from './views/quiz/shared/quiz.service';
import { GroupComponent } from './views/group/group.component';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    CurriculumModule,
    HttpClientModule,
    SharedModule,
    NgxPermissionsModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    UserService,
    QuestionService,
    AnswerService,
    TopicService,
    QuizService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
