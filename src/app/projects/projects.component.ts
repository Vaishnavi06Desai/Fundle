import { Component, OnInit } from '@angular/core';
import { FormBase } from '../form-template/form-base';
import { TextboxField } from '../form-template/form-textbox';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  fields: FormBase<string>[] = [

    new TextboxField({
      key: 'firstName',
      label: 'First name',
      required: true,
    }),

    new TextboxField({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
    })
  ];

  countChange(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
