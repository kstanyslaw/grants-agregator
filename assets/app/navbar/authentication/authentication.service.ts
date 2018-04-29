import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import { User } from '../../user.model';
import { VARIABLES } from '../../../../var';

@Injectable()
export class AuthenticationService {

  private variables: any = VARIABLES;

  constructor(private http: Http) { }

  singup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.variables.api + 'user', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json())); 
  }

  checkEmail(email: string) {
    console.log("email checked!");
    console.log(email);    
  }
  

}
