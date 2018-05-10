import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthenticationService } from "./authentication/authentication.service";

import { NavbarComponent } from "./navbar.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { AppRoutingModule } from "../app.routing";
import { LoginComponent } from "./authentication/login/login.component";
import { SingupComponent } from "./authentication/singup/singup.component";
import { ConfirmComponent } from "./authentication/confirm/confirm.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
      ],
      declarations: [
        NavbarComponent,
        AuthenticationComponent,
        LoginComponent,
        SingupComponent,
        ConfirmComponent
      ],
      providers: [
        AuthenticationService
      ],
      exports: [
        NavbarComponent,
        AuthenticationComponent,
        LoginComponent,
        SingupComponent,
        ConfirmComponent
      ]
})
export class NavbarModule { }