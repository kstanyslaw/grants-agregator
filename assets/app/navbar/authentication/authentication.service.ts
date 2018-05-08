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

  confirmEmail(userId: String) {
    const body = JSON.stringify({userId: userId});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.patch(this.variables.api + 'user/confirm-email/', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  checkEmail(email: String) {
    const body = JSON.stringify({email: email});   
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.variables.api + 'user/check-email', body, {headers: headers})
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error.json())); 
  }
  
  login(user: User) {
    console.log(user);
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.variables.api + 'user/login', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json())); 
  }

  logout() {
    localStorage.clear();
  }

  IsLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
