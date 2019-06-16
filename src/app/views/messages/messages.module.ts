import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { MessagesComponent } from './messages.component';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  imports: [
    MessagesRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule
  ],
  declarations: [ MessagesComponent ]
})
export class MessagesModule { }
