import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() {}

  singup(email: string, password: string) {
      var user = {
          email: email,
          password: password
      }
    console.log("User singup");
    console.log(user);    
  }

  checkEmail(email: string) {
    console.log("email checked!");
    console.log(email);    
  }
  

}
