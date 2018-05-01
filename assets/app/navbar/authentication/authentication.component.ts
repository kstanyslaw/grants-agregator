import { Component } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

@Component ({
    selector: 'authentication-app',
    templateUrl: 'authentication.component.html',
    styleUrls:['authentication.component.css']
})

export class AuthenticationComponent{
    
    isShow = false;

    dropdownShow = false;

    constructor(private authenticationService: AuthenticationService) {}

    isLoggedIn() {
        return this.authenticationService.IsLoggedIn();
    }

    logout() {
        this.authenticationService.logout();
        this.dropdownShow = false;
    }
}