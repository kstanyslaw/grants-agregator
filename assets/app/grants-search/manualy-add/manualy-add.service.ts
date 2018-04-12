import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { Grant } from './grant.model';

@Injectable()
export class ManualyAddService {

  private grants: Grant[] = [];

  constructor(private http: Http) {}

  addGrant(grant: Grant) {
    this.grants.push(grant);
    const body = JSON.stringify(grant);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhosh:3000/grant', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getGrant() {
    return this.http.get('http://localhosh:3000/grant')
      .map((response: Response) => {
        const grants = response.json().obj;
        let transformedGrants: Grant[] = [];
        for (let grant of grants) {
          transformedGrants.push(new Grant(
            grant.name,
            grant.description,
            grant.price,
            grant.url,
            null,
            null
          ))
        }
        this.grants = transformedGrants;
        return transformedGrants;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
