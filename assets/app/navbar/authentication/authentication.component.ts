import { Component } from "@angular/core";

@Component ({
    selector: 'authentication-app',
    templateUrl: 'authentication.component.html',
    styles:[`
      .modal {
        background-color: rgba(0, 0, 0, 0.6);
          overflow-y:scroll;
      }

      .show {
        display: block;
      }
    `]
})

export class AuthenticationComponent {
    
    isShow = true;

}