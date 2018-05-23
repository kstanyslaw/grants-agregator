import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { Grant } from '../grant.model';
import { VARIABLES } from '../../../var'

@Injectable()
export class GrantsSearchService {

  private grants: Grant[] = [];

  private variables: any = VARIABLES;

  constructor(private http: Http) {}

  addGrant(grant: Grant) {
    const body = JSON.stringify(grant);    
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.variables.api + 'grant', body, {headers: headers})
    .map((response: Response) => {
      grant.id = response.json().obj._id;
      this.grants.push(grant);
      return grant;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getGrant(filters?) {
    const body = this.toHttpParams(filters);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get(this.variables.api + 'grant', {params: body})
      .map((response: Response) => {
        const grants = response.json().obj;     
        let transformedGrants: Grant[] = [];
        for (let grant of grants) {
          transformedGrants.push(new Grant(
            grant._id,
            grant.name,
            grant.grantor,
            grant.url,
            grant.dateStart,
            grant.deadline,
            grant.price,
            grant.geoScale,
            grant.grantee,
            grant.region,
            grant.city,
            grant.description,
            grant.categories,
          ))
        }
        this.grants = transformedGrants;
        return transformedGrants;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  toHttpParams(params: Object) {
    let p = new URLSearchParams();
    for (const key in params) {
      p.append(key, params[key]);
    }
    return p;
  }
}