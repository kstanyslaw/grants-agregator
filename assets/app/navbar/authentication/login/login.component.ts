import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthenticationService } from "../authentication.service";
import { User } from "../../../user.model";

@Component ({
    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit{

    loginForm: FormGroup;

    passwordVisible: boolean = true;

    constructor (private authenticationService: AuthenticationService) { }

    onSubmit() {
        var user = new User(
            this.loginForm.value.email,
            this.loginForm.value.password
        )
        this.authenticationService.login(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    localStorage.setItem('userRole', data.userRole);
                    console.log(data)
                },
                error => console.error(error)
            );
        this.loginForm.reset();
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }
}