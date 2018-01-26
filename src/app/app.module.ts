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
import { CurriculumListComponent } from './views/curriculum/curriculum-list/curriculum-list.component';
import { CurriculumFormComponent } from "./views/curriculum/curriculum-form/curriculum-form.component";
import { CurriculumRoutingModule } from "./views/curriculum/curriculum-routing.module";
import { FormsModule } from "@angular/forms";
import { CurriculumModule } from "./views/curriculum/curriculum.module";
import { UserComponent } from './views/user/user.component';
import {AuthenticationService} from "./auth/services/authentication.service";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    CurriculumModule,
    /*HttpModule,
    routing*/
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    UserComponent,
    /*LoginComponent,
    HomeComponent*/
  ],
  providers: [
    AuthenticationService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
