import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component ({
    selector: 'singup-app',
    templateUrl: 'singup.component.html',
    styleUrls: ['singup.component.css']
})

export class SingupComponent implements OnInit{

    singupForm: FormGroup;

    passwordVisible: boolean = true;

    onSubmit() {
        console.log(this.singupForm.value);
        this.singupForm.reset();
    }

    onCheckEmail() {
        console.log("change email!");
    }

    ngOnInit() {
        this.singupForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }
}