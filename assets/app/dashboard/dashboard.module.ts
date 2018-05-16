import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "../app.routing";

import { DashboardComponent } from "./dashboard.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
      ],
      declarations: [
        DashboardComponent
      ],
      providers: [
      ],
      exports: [
          DashboardComponent
      ]
})
export class DashboardModule { }