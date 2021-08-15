import { Component, OnInit } from '@angular/core';
import { tools } from '../JSONData/tool';
import { projects } from '../JSONData/projects';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss']
})
export class WorkspacesComponent implements OnInit {

  tools: any;
  proj: any;
  projpopup: boolean;
  collabpopup: boolean;

  constructor() { }

  ngOnInit(): void {

    this.tools = tools;
    this.proj = projects;
    this.projpopup = false;
    this.collabpopup = false;
  }
  form = new FormGroup({
    Projectname: new FormControl(''),
    Info: new FormControl(''),

  })
  addprojs() {
    this.projpopup = true;
    this.collabpopup = false;
    console.log("Project added");
  }
  addcollabs() {
    this.projpopup = false;
    this.collabpopup = true;
    console.log("Collab added")
  }
  Submit(){
    console.log(this.form.value);
    this.projpopup = false;
    this.collabpopup = false;
  }
}
