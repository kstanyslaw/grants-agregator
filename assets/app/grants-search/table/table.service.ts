import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { Grant } from '../manualy-add/grant.model';
import { VARIABLES } from '../../../../var'

@Injectable()
export class TableService {

  private variables: any = VARIABLES;

  private grants: Grant[] = [];

  constructor(private http: Http) {}

  getGrant() {
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
