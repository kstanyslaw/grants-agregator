import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthenticationService } from "../authentication.service";
import { User } from "../../../user.model";

@Component ({
    selector: 'singup-app',
    templateUrl: 'singup.component.html',
    styleUrls: ['singup.component.css']
})

export class SingupComponent implements OnInit{
    
    singupForm: FormGroup;

    passwordVisible: boolean = true;

    messages = {
        default: {message: 'Мы никому не сообщим вашу электронную почту.', alertClass: 'form-text text-muted', formClass: '', valid: false},
        emailIsTaken: {message: 'Пользователь с такой электронной почтой уже существует.', alertClass: 'alert alert-danger', formClass: 'danger', valid: false},
        invalidEmail: {message: 'Проверьте, правильно ли введен адрес электронной почты.', alertClass: 'alert alert-warning', formClass: 'warning', valid: false},
    }

    emailCheck = this.messages.default;

    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    onSubmit() {
        var user = new User(
            this.singupForm.value.email,
            this.singupForm.value.password
        )
        var path = this.router.url;
        this.authenticationService.singup(user, path).subscribe(
            data => console.log(data),
            error => console.error(error)
        );
        this.singupForm.reset();
    }

    onCheckEmail() {
        //Is email occupied
        this.authenticationService.checkEmailFree(this.singupForm.value.email).subscribe(
            data => {
                switch (true) {
                    case !this.authenticationService.checkEmailValid(this.singupForm.value.email):
                        this.emailCheck = this.messages.invalidEmail;
                        break;
                    case data.result:
                        this.emailCheck = this.messages.emailIsTaken;
                        break;
                    default:
                        this.emailCheck = this.messages.default;
                        this.emailCheck.valid = true;
                }
            },
            error => console.error(error)
        );
    }

    ngOnInit() {
        this.singupForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }
}