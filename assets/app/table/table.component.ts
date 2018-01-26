import { Component, OnInit } from '@angular/core';

import { Grant } from '../manualy-add/grant.model';
import { TableService } from './table.service';

@Component({
  selector: 'table-app',
  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit {

  grants: Grant[] = [];

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.tableService.getGrant()
    .subscribe(
      (grants: Grant[]) => {
        this.grants = grants;
        console.log(this.grants);
      }
    )
  }
}
