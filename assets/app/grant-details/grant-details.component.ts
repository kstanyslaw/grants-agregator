import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GrantDetailsService } from './grant-details.service';
import { Grant } from '../grant.model';

@Component({
  selector: 'grant-details-app',
  templateUrl: 'grant-details.component.html',
})
export class GrantDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private grantDetailsService: GrantDetailsService) { }

  private grant: Grant;

  ngOnInit() {
    this.getGrantDetails();
  }

  getGrantDetails() {
    const grantId = this.route.snapshot.paramMap.get('id');
    this.grantDetailsService.getGrantDetails(grantId)
      .subscribe(
        (grant: Grant) => {
          this.grant = grant;
          console.log(this.grant)
        },
        error => console.error(error)
      );
  }
}
