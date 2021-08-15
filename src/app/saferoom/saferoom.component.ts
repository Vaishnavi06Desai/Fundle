import { Component, OnInit } from '@angular/core';
import { tools3 } from '../JSONData/tool'
import { safedata } from '../JSONData/safedata'

@Component({
  selector: 'app-saferoom',
  templateUrl: './saferoom.component.html',
  styleUrls: ['./saferoom.component.scss']
})
export class SaferoomComponent implements OnInit {

  tools: any;
  safedata:any;
  rooms: boolean;
  forum: boolean;
  mood: boolean;
  diary: boolean;

  constructor() { }
  ngOnInit(): void {
    this.tools = tools3;
    this.safedata=safedata;
    this.rooms = false;
    this.forum = true;
    this.mood = false;
    this.diary = false;
  }

  callfunc(i: any) {
    if (i == 0) {
      this.roomspopup();
    }
    else {
      if (i == 1) {
        this.forumpopup();
      }
      else {
        if (i == 2) {
         this.moodpopup();
        }
        else {
          this.diarypopup();
        }
      }
    }
  }
  roomspopup() {
    this.rooms = true;
    this.forum = false;
    this.mood = false;
    this.diary = false;
  }
  forumpopup() {
    this.rooms = false;
    this.forum = true;
    this.mood = false;
    this.diary = false;
  }
  moodpopup() {
    this.rooms = false;
    this.forum = false;
    this.mood = true;
    this.diary = false;
  }
  diarypopup() {
    this.rooms = false;
    this.forum = false;
    this.mood = false;
    this.diary = true;
  }
}
