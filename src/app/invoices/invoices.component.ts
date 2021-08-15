import { Component, OnInit } from '@angular/core';
import { tools2 } from '../JSONData/tool';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  tools:any;
  invpopup:boolean;

  constructor() { }

  ngOnInit(): void {
    this.tools=tools2;
    this.invpopup=false;
  }
  addinvoices() {
    this.invpopup = true;
    console.log("Project added");
  }
  Submit(){
    this.invpopup = false;
  }

}
