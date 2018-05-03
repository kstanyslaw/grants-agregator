import { Component, OnInit } from '@angular/core';
import { ManualyAddchService } from '../manualy-add.service';

@Component({
  selector: 'modal-app',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private manualyAddService: ManualyAddchService) {  }
  
  ngOnInit() { }
}
