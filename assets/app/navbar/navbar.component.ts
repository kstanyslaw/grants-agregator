import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-app',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor() {  }

  isShow = false;

  onClick() {
    if (this.isShow) {
        this.isShow = false;
    } else {
      this.isShow =  true;
    }
  }

  ngOnInit() {}
}
