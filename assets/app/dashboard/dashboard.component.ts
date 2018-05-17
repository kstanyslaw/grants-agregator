import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-app',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}

  dashboard: string = 'Dashboard Works!';
}
