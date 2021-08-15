import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  activity = {
    Label: ['Coding', 'Running', 'Medication', 'Reading', 'casio'],
    Data: [80, 160, 200, 100, 30],
    Type: 'doughnut'
  };

  ngOnInit(): void {
  }

}
