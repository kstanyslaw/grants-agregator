import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component ({
    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit{

    loginForm: FormGroup;

    onSubmit() {
        console.log(this.loginForm.value);
        this.loginForm.reset();
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }
}