import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormBusService {

  constructor() { }

  onSubmit(formno: number, formvalue: any){
    if(formno == 1){
      console.log(formvalue);
    }
  }
}
