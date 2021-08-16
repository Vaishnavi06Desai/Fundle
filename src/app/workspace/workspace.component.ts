import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  metadata: any = null;
  constructor(private route: ActivatedRoute, private router: Router, private db: AngularFirestore, private as: AuthService) { }

  wId: any;
  userID: any;
  ngOnInit(): void {
    this.wId = this.route.snapshot.queryParams['id'];
    this.as.getUserState()
    .subscribe(user => {
      if(user == null){this.router.navigate(['/signin'])}
      this.userID = user.uid;
      this.getMetadata();
    })
    
  }

  getMetadata(){
    this.db.collection("Workspaces").doc(this.userID).collection("Projects").doc(this.wId).snapshotChanges().subscribe(res => {
      this.metadata = res;
      // console.log(this.projects[0].payload.doc.data());
    })
  }

}
