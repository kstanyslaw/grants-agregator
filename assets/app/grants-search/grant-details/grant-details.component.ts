import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'grant-details-app',
  templateUrl: 'grant-details.component.html',
})
export class GrantDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {  }

  grantUrl: string;

  ngOnInit() {
    this.getGrantDetails();
  }

  getGrantDetails() {
    const grantUrl = this.route.snapshot.paramMap.get('url');
    this.grantUrl = grantUrl;
  }
}
