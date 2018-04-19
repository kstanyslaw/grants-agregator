import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-app',
  templateUrl: 'modal.component.html',
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
export class ModalComponent implements OnInit {

  isShow = false;

  constructor() {  }

  ngOnInit() {}
}
