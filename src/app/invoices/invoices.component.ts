import { Component, OnInit } from '@angular/core';
import { FormBase } from '../form-template/form-base';
import { TextboxField } from '../form-template/form-textbox';
import { tools2 } from '../JSONData/tool';
import { FormControl, FormGroup, ValidationErrors, Validators  } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  tools:any;
  invpopup:boolean;

  invoice:any;
  userID:any;
  downloadUrl:any;
  date:any;
  compname:any;

  constructor(private as: AuthService, private db: AngularFirestore, private router: Router, private storage: AngularFireStorage) { }
//  Invoices: FormBase<string>[] = [

//     new TextboxField({
//       key: 'CompanyName',
//       label: 'Company Name',
//       required: true,
//     }),

//     new TextboxField({
//       key: 'Date',
//       label: 'Date',
//       required: true,
//       type: 'date',
//     }),
//     new TextboxField({
//       key: 'Upload File',
//       label: 'Upload File',
//       required: true,
//       type: 'file',
//     }),
  // ];

  forminvoices = new FormGroup({
    name: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.tools=tools2;
    this.invpopup=false;
    this.as.getUserState()
    .subscribe(user => {
      if(user == null){this.router.navigate(['/signin'])}
      this.userID = user.uid;
      // this.getProjects();
    })
  }
  addinvoices() {
    this.invpopup = true;
    console.log("Project added");
  }
  submit(){
    this.invpopup = false;
    console.log(this.forminvoices.value);
    // const path = `${this.userID}/invoice/${this.invoice.name}`;
    const path = `Invoices/${this.invoice.name}`;
    const dbpath= `Invoices/${this.userID}/invoice`
    const ref = this.storage.ref(path);
      // this.compname = name;
      // this.date = date;
    this.storage.upload(path, this.invoice).then(
      ress => {
        ref.getDownloadURL().subscribe(res => {
          console.log(res);
          this.db.collection(dbpath).add({Company_name: this.forminvoices.value.name, Date: this.forminvoices.value.date, Link: res, uid: this.userID}).then(e => {
            // 
            console.log(e)
            this.router.navigate(['/invoices'])
          }).
            catch(e => { console.log(e) });
        })

      });
  }
  uploadinvoice(event: Event) {
    let files: FileList = event.target["files"];
    this.invoice = files.item(0);
    console.log(this.invoice);
  }
}
