import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'profile-app',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    profile: string = "Profile Works!"
}