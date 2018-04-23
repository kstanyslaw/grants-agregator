import { Component } from "@angular/core";

@Component ({
    selector: 'authentication-app',
    templateUrl: 'authentication.component.html',
    styleUrls:['authentication.component.css']
})

export class AuthenticationComponent{
    
    isShow = false;

    isLoggedIn() {
        return true;
    }

}