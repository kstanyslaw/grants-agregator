import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Grant } from '../../../grant.model';
import { GrantsSearchService } from '../../grants-search.service';

@Component({
  selector: 'modal-form-app',
  templateUrl: 'modal-form.component.html',
  styleUrls: ['modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  grantForm: FormGroup;

  constructor(private grantsSearchService: GrantsSearchService) {}

  onSubmit() {
    var grant = new Grant(
      this.grantForm.value.name,
      this.grantForm.value.description,
      this.grantForm.value.price,
      this.grantForm.value.url,
      null,
      null
    );
    this.grantsSearchService.addGrant(grant)
      .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
      console.log("Географический масштаб " + this.grantForm.value.geoScale);
      console.log("Грантополучатель " + this.grantForm.value.grantRecipient);
    this.grantForm.reset();
  }


  ngOnInit() {
    this.grantForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      geoScale: new FormControl(null),
      grantRecipient: new FormControl(null),
      url: new FormControl(null, Validators.required),
    })
  }
}
