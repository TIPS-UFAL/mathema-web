import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
