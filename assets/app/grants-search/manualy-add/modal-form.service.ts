import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { Grant } from '../../grant.model';
import { VARIABLES } from '../../../../var'

@Injectable()
export class ModalFormService {

  private grants: Grant[] = [];

  private variables: any = VARIABLES;

  constructor(private http: Http) {}

  addGrant(grant: Grant) {
    this.grants.push(grant);
    const body = JSON.stringify(grant);
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('http://localhost:3000/grant', body, {headers: headers})
    return this.http.post(this.variables.api + 'grant', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getGrant() {
    // return this.http.get('http://localhost:3000/grant')
    return this.http.get(this.variables.api + 'grant')
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
