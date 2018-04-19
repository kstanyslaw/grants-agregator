import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { NavbarComponent } from "./navbar.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { AppRoutingModule } from "../app.routing";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule
      ],
      declarations: [
        NavbarComponent,
        AuthenticationComponent
      ],
      providers: [

      ],
      exports: [
        NavbarComponent,
        AuthenticationComponent
      ]
})
export class NavbarModule { }