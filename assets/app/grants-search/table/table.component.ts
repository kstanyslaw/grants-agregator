import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Grant } from '../../grant.model';
// import { TableService } from './table.service';
import { GrantsSearchService } from '../grants-search.service';

@Component({
  selector: 'table-app',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css']
})
export class TableComponent implements OnInit {

  grants: Grant[] = [];

  // constructor(private tableService: TableService) {}
  constructor(private grantsSearchService: GrantsSearchService, private router: Router) {}

  ngOnInit() {
    this.grantsSearchService.getGrant()
    .subscribe(
      (grants: Grant[]) => {
        this.grants = grants;
        // console.log(this.grants);
      }
    )
  }
}
