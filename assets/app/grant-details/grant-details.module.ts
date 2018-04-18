import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';

import { GrantDetailsComponent } from "./grant-details.component";

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        GrantDetailsComponent
    ],
    providers:[],
    exports:[
        GrantDetailsComponent
    ]
})
export class GrantDetailsModule { }