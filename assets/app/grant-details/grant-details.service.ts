import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { VARIABLES } from '../../../var';
import { Grant } from '../grant.model';

@Injectable()
export class GrantDetailsService {

  private variables: any = VARIABLES;

  constructor(private http: Http) { }

  getGrantDetails(id) {
    return this.http.get(this.variables.api + 'grant/details/' + id)
      .map((response: Response) => {
        const grant = response.json().obj;
        var transformedGrant = new Grant(
            grant.name,
            grant.description,
            grant.price,
            grant.url,
            grant.categories,
            grant.duration,
            grant._id
        )
        return transformedGrant;
      })
      .catch((error: Response) => Observable.throw(error.json()))
  }
}
