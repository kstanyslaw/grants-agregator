import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { NavbarComponent } from "./navbar.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { AppRoutingModule } from "../app.routing";
import { LoginComponent } from "./authentication/login/login.component";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
      ],
      declarations: [
        NavbarComponent,
        AuthenticationComponent,
        LoginComponent
      ],
      providers: [

      ],
      exports: [
        NavbarComponent,
        AuthenticationComponent,
        LoginComponent
      ]
})
export class NavbarModule { }