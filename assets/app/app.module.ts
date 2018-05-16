import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { NavbarModule } from './navbar/navbar.module';
import { GrantsSearchModule } from './grants-search/grants-search.module';
import { GrantDetailsModule } from './grant-details/grant-details.module';
import { PricingModule } from './pricing/pricing.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppRoutingModule } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        NavbarModule,
        GrantsSearchModule,
        AppRoutingModule,
        GrantDetailsModule,
        PricingModule,
        DashboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
