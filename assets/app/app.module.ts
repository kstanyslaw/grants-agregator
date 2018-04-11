import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';
import { GrantsSearchModule } from './grants-search/grants-search.module';

import { AppRoutingModule } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        GrantsSearchModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
