import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Grant } from '../../grant.model';
import { ManualyAddService } from './manualy-add.service';

@Component({
  selector: 'manualy-add-app',
  templateUrl: 'manualy-add.component.html',
  styleUrls: ['manualy-add.component.css']
})
export class ManualyAddComponent implements OnInit {

  grantForm: FormGroup;

  constructor(private manualyAddService: ManualyAddService) {}

  onSubmit() {
    var grant = new Grant(
      this.grantForm.value.name,
      this.grantForm.value.description,
      this.grantForm.value.price,
      this.grantForm.value.url,
      null,
      null
    );
    this.manualyAddService.addGrant(grant)
      .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
    this.grantForm.reset();
  }


  ngOnInit() {
    this.grantForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      url: new FormControl(null, Validators.required),
    })
  }
}
