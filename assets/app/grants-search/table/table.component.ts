import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Grant } from '../manualy-add/grant.model';
// import { TableService } from './table.service';
import { ManualyAddService } from '../manualy-add/manualy-add.service';

@Component({
  selector: 'table-app',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css']
})
export class TableComponent implements OnInit {

  grants: Grant[] = [];

  // constructor(private tableService: TableService) {}
  constructor(private manualyAddService: ManualyAddService, private router: Router) {}

  ngOnInit() {
    this.manualyAddService.getGrant()
    .subscribe(
      (grants: Grant[]) => {
        this.grants = grants;
        // console.log(this.grants);
      }
    )
  }

  onClick(url) {
    console.log(url);
    this.router.navigateByUrl('/details/' + url);
  }
}
