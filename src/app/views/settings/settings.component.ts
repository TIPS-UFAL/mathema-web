import { Component } from '@angular/core';
import { Settings } from './settings.model';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html'
})

export class SettingsComponent {

    model = new Settings();

    // diagnostic é um método de teste que transforma em string os dados atuais do model
    // se colocar {{ diagnostic }} no topo de group-form.component.html ele mostra os dados na  página
    get diagnostic() { return JSON.stringify(this.model); }
}
