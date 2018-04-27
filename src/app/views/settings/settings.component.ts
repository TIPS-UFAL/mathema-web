import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'settings',
    templateUrl: './settings.component.html'
})

export class SettingsComponent implements OnInit {
    private passwordChangeForm: FormGroup
    currentPassword: string
    newPassword: string
    newPassword2: string
    error = []

    constructor() {}

    ngOnInit(): void {
        this.passwordChangeForm = new FormGroup ({
            'currentPassword': new FormControl(this.currentPassword, Validators.required),
            'newPassword': new FormControl(this.newPassword, Validators.required),
            'newPassword2': new FormControl(this.newPassword2, Validators.required)
        })
    }

    save() {
        console.log(this.currentPassword)
        console.log(this.newPassword)
        console.log(this.newPassword2)

        //TODO: pegar hash da senha atual e comparar com senha digitada
        //TODO: comparar campos da senha nova
    }
}
