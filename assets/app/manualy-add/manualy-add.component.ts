import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'manualy-add-app',
  templateUrl: 'manualy-add.component.html',
  styleUrls: ['manualy-add.component.css']
})
export class ManualyAddComponent implements OnInit {

  grantForm: FormGroup;

  onSubmit() {
    console.log(this.grantForm.value);
    this.grantForm.reset();
  }

  constructor() {  }

  ngOnInit() {
    this.grantForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      url: new FormControl(null, Validators.required),
    })
  }
}
