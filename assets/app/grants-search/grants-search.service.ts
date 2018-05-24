import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { Grant } from '../grant.model';
import { VARIABLES } from '../../../var'

@Injectable()
export class GrantsSearchService {

  private grants: Grant[] = [];

  private variables: any = VARIABLES;

  constructor(private httpClient: HttpClient) {}

  addGrant(grant: Grant) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.httpClient.post<Grant>((this.variables.api + 'grant'), grant, httpOptions)
      .map((response) => {
        this.grants.push(response);
      })
      .catch((error) => Observable.throw(error.json()));
  }

  getGrant(filters?) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams({fromObject: filters})
    }
    return this.httpClient.get<Grant[]>((this.variables.api + 'grant'), httpOptions)
      .map((grants) => this.grants = grants)
      .catch((error) => Observable.throw(error.json()));
  }
}