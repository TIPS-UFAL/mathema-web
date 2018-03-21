import { Component } from '@angular/core';
import { Subject } from './subject';

@Component({
    selector: 'subject',
    templateUrl: './subject.component.html'
})

export class SubjectComponent {

    model = new Subject();

    // diagnostic é um método de teste que transforma em string os dados atuais do model
    // se colocar {{ diagnostic }} no topo de group-form.component.html ele mostra os dados na  página
    get diagnostic() { return JSON.stringify(this.model); }
}
