import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  chartType: ChartType = 'doughnut';
  activity = {
    Label: ['Coding', 'Running', 'Medication', 'Reading', 'casio'],
    Data: [80, 160, 200, 100, 30],
    Type: this.chartType
  };

  ngOnInit(): void {
  }

}
