import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component ({
    selector: 'singup-app',
    templateUrl: 'singup.component.html',
    styleUrls: ['singup.component.css']
})

export class SingupComponent implements OnInit{

    // loginForm: FormGroup;

    // onSubmit() {
    //     console.log(this.loginForm.value);
    //     this.loginForm.reset();
    // }

    ngOnInit() {
        // this.loginForm = new FormGroup({
        //     email: new FormControl(null, Validators.required),
        //     password: new FormControl(null, Validators.required)
        // })
    }
}