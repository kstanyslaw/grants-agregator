import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GrantsSearchComponent } from './grants-search.component';
import { TableComponent } from './table/table.component';
import { ManualyAddComponent } from './manualy-add/manualy-add.component';
import { ModalComponent } from './manualy-add/modal/modal.component';
import { ManualyAddService } from './manualy-add/manualy-add.service';
import { GrantDetailsComponent } from './grant-details/grant-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [
    GrantsSearchComponent,
    TableComponent,
    ManualyAddComponent,
    ModalComponent,
    GrantDetailsComponent
  ],
  providers: [
    ManualyAddService
  ],
  exports: [
    GrantsSearchComponent,
    TableComponent,
    ManualyAddComponent,
    ModalComponent,
    GrantDetailsComponent
  ]
})
export class GrantsSearchModule { }
