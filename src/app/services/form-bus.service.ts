import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormBusService {

  constructor(private db: AngularFirestore) { }

  onSubmit(formno: number, uid: string, formvalue: any, docid: string){
    if(formno == 0){
      console.log(formvalue);
    }

    else if(formno == 1){
      this.db.collection("Workspaces").doc(uid).collection("Projects").add(formvalue);
    }

    else if(formno == 2){
      this.db.collection("Workspaces").doc(uid).collection("Projects").doc(docid).collection("boards").add(formvalue);
    }
  }
}
