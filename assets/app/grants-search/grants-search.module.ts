import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';

import { GrantsSearchComponent } from './grants-search.component';
import { TableComponent } from './table/table.component';
import { ModalFormComponent } from './manualy-add/modal-form/modal-form.component';
import { ModalComponent } from './manualy-add/modal/modal.component';
import { ManualyAddComponent } from './manualy-add/manualy-add.component';

import { ManualyAddchService } from './manualy-add/manualy-add.service';
import { GrantsSearchService } from './grants-search.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    GrantsSearchComponent,
    TableComponent,
    ModalFormComponent,
    ModalComponent,
    ManualyAddComponent
  ],
  providers: [
    GrantsSearchService,
    ManualyAddchService
  ],
  exports: [
    GrantsSearchComponent,
    TableComponent,
    ModalFormComponent,
    ModalComponent,
    ManualyAddComponent
  ]
})
export class GrantsSearchModule { }
