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
        )
        return transformedGrant;
      })
      .catch((error: Response) => Observable.throw(error.json()))
  }
}
