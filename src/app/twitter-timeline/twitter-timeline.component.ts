import { Component, OnInit } from '@angular/core';
import {TwitterserviceService} from '../../../server/twitterservice.service'
@Component({
  selector: 'app-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.scss']
})
export class TwitterTimelineComponent implements OnInit {
   
  myTimeline: any;
 
  constructor(private api: TwitterserviceService) { }
 
  ngOnInit() {
   this.getTwitterTimeline();
  }
   
  getTwitterTimeline(): void {
    this.api.getTimeline()
      .subscribe(
        myTimeline => {
          this.myTimeline = myTimeline;
          console.log(this.myTimeline.data.length);
        }
      )
   }
   
}
