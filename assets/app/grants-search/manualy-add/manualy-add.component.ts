import { Component, OnInit } from '@angular/core';
import { ManualyAddchService } from './manualy-add.service';

@Component({
    selector: 'manualy-add-app',
    templateUrl: 'manualy-add.component.html',
    styleUrls: ['manualy-add.component.css']
})

export class ManualyAddComponent implements OnInit {

    constructor(private manualyAddService: ManualyAddchService) { }

    ngOnInit() { }

    checkRole() {
        if (localStorage.getItem('userRole') != 'administrator') {
            return false;
        } else {
            return true;
        }
    }
}