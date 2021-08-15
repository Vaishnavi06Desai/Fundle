import { Component, OnInit } from '@angular/core';
import { tools } from '../JSONData/tool';


@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss']
})
export class WorkspacesComponent implements OnInit {

  tools:any;
  constructor() { }

  ngOnInit(): void {
    this.tools=tools;

  }

}
