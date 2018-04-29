import { Injectable } from '@angular/core';
import { User } from '../../user.model';

@Injectable()
export class AuthenticationService {

  constructor() {}

  singup(user: User) {
    console.log(user);    
  }

  checkEmail(email: string) {
    console.log("email checked!");
    console.log(email);    
  }
  

}
