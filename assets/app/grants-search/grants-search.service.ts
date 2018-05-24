import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { Grant } from '../grant.model';
import { VARIABLES } from '../../../var'

@Injectable()
export class GrantsSearchService {

  private grants: Grant[] = [];

  private variables: any = VARIABLES;

  constructor(private http: Http, private httpClient: HttpClient) {}

  addGrant(grant: Grant) {
    const body = JSON.stringify(grant);    
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.variables.api + 'grant', body, {headers: headers})
    .map((response: Response) => {
      grant._id = response.json().obj._id;
      this.grants.push(grant);
      return grant;
      })
      .catch((error: Response) => Observable.throw(error.json()));
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