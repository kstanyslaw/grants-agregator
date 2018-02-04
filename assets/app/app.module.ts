import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { TableService } from './table/table.service';
import { ManualyAddComponent } from './manualy-add/manualy-add.component';
import { ManualyAddService } from './manualy-add/manualy-add.service';
import { ModalComponent } from './manualy-add/modal/modal.component';
import { GrantsSearchComponent } from './grants-search/grants-search.component';

import { app_routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        TableComponent,
        ManualyAddComponent,
        ModalComponent,
        GrantsSearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        app_routing
    ],
    providers: [
      ManualyAddService,
      TableService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
