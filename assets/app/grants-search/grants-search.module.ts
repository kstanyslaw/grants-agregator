import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GrantsSearchComponent } from './grants-search.component';
import { TableComponent } from './table/table.component';
import { ModalFormComponent } from './manualy-add/modal-form/modal-form.component';
import { ModalComponent } from './manualy-add/modal/modal.component';
import { GrantsSearchService } from './grants-search.service'

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
    ModalFormComponent,
    ModalComponent,
  ],
  providers: [
    GrantsSearchService
  ],
  exports: [
    GrantsSearchComponent,
    TableComponent,
    ModalFormComponent,
    ModalComponent,
  ]
})
export class GrantsSearchModule { }
