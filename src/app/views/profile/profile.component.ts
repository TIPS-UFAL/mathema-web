import { Component } from '@angular/core';
import { Profile } from './profile';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent {

    model = new Profile();

    // diagnostic é um método de teste que transforma em string os dados atuais do model
    // se colocar {{ diagnostic }} no topo de topic-form.component.html ele mostra os dados na  página
    get diagnostic() { return JSON.stringify(this.model); }
}