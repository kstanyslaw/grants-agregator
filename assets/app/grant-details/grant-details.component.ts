import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'grant-details-app',
  templateUrl: 'grant-details.component.html',
})
export class GrantDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {  }

  grantId: string;

  ngOnInit() {
    this.getGrantDetails();
  }

  getGrantDetails() {
    const grantId = this.route.snapshot.paramMap.get('id');
    this.grantId = grantId;
  }
}
