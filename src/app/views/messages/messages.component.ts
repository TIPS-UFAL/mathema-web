import { Component } from '@angular/core';
import { Messages } from './messages';

@Component({
    selector: 'messages',
    templateUrl: './messages.component.html'
})

export class MessagesComponent {

    model = new Messages();

    // diagnostic é um método de teste que transforma em string os dados atuais do model
    // se colocar {{ diagnostic }} no topo de topic-form.component.html ele mostra os dados na  página
    get diagnostic() { return JSON.stringify(this.model); }
}