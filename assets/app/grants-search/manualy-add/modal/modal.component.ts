import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-app',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css']
})
export class ModalComponent implements OnInit {

  isShow = false;

  constructor() {  }

  ngOnInit() {}
}
