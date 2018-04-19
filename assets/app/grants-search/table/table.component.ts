import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Grant } from '../../grant.model';
// import { TableService } from './table.service';
import { ModalFormService } from '../manualy-add/modal-form.service';

@Component({
  selector: 'table-app',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css']
})
export class TableComponent implements OnInit {

  grants: Grant[] = [];

  // constructor(private tableService: TableService) {}
  constructor(private modalFormService: ModalFormService, private router: Router) {}

  ngOnInit() {
    this.modalFormService.getGrant()
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
