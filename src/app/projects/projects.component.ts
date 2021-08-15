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
      value: 'Bombasto',
      required: true,
      order: 1
    }),

    new TextboxField({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 2
    })
  ];

  countChange(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
