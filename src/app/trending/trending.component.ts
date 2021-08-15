import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TwitterserviceService} from '../../../server/twitterservice.service';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  myTimeline:any;
  constructor(private httpClient: HttpClient,private api: TwitterserviceService) { }

  ngOnInit(): void {
this.getTwitterTrending();
  }
  getTwitterTrending() {

    this.httpClient.get<any>('https://fundle-backend.herokuapp.com/v1/fundle/trending', {

    }).subscribe(
      (res) => {
        console.log(res);

      },
      (err) => {
        console.log(err);

      }
    );
  }
}
