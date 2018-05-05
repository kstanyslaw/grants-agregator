import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import { HttpModule } from "@angular/http";

import { GrantDetailsComponent } from "./grant-details.component";
import { GrantDetailsService } from "./grant-details.service";

@NgModule({
    imports:[
        CommonModule,
        HttpModule
    ],
    declarations:[
        GrantDetailsComponent
    ],
    providers:[
        GrantDetailsService
    ],
    exports:[
        GrantDetailsComponent
    ]
})
export class GrantDetailsModule { }