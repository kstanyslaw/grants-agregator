import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-app',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {  }

  isShow = false;

  ngOnInit() {}
}
