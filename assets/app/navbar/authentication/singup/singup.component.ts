import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthenticationService } from "../authentication.service";

@Component ({
    selector: 'singup-app',
    templateUrl: 'singup.component.html',
    styleUrls: ['singup.component.css']
})

export class SingupComponent implements OnInit{

    singupForm: FormGroup;

    passwordVisible: boolean = true;

    constructor(private authenticationService: AuthenticationService) { }

    onSubmit() {
        this.authenticationService.singup(this.singupForm.value.email, this.singupForm.value.password);
        this.singupForm.reset();
    }

    onCheckEmail() {
        this.authenticationService.checkEmail(this.singupForm.value.email);
    }

    ngOnInit() {
        this.singupForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }
}