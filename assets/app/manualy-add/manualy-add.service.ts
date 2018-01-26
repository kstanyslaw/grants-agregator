import { Injectable } from '@angular/core';

import { Grant } from './grant.model';

@Injectable()
export class ManualyAddService {

  private grants: Grant[] = [];

  constructor() {  }

  addGrant(grant: Grant) {
    this.grants.push(grant);
    console.log(this.grants);
  }
}
