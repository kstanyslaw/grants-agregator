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
      this.grantForm.value.grantor,
      this.grantForm.value.url,
      this.grantForm.value.dateStart,
      this.grantForm.value.deadline,
      this.grantForm.value.price,
      this.grantForm.value.geoScale,
      this.grantForm.value.grantee,
      this.grantForm.value.description,
      null,
    );
    this.grantsSearchService.addGrant(grant)
      .subscribe(
          data => console.log(data),
          error => console.error(error)
        );
    this.grantForm.reset();
  }


  ngOnInit() {
    this.grantForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      grantor: new FormControl(null, Validators.required),
      url: new FormControl(null, Validators.required),
      dateStart: new FormControl(null, Validators.required),
      deadline: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      geoScale: new FormControl(null, Validators.required),
      grantee: new FormControl(null, Validators.required),
      description: new FormControl(null),
      categories: new FormControl(null),
    })
  }
}
