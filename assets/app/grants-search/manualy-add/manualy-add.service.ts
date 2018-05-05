import { Injectable } from '@angular/core';

@Injectable()
export class ManualyAddchService {
    
    modalIsShow = false;

    constructor() { }

    changeModalIsShow(value: boolean) {
        this.modalIsShow = value;      
    }
  
}
