import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpService} from './http.service';

@NgModule({
  imports: [
    CommonModule,
    HttpService
  ],
  declarations: [],
  providers: [
    HttpService
  ]
})
export class SharedModule { }
