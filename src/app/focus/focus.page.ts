import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {FocusService, FocusSession} from "../services/focus.service";
import {Subscription} from "rxjs";
import {CourseServiceService} from "../services/couse-service.service";
import {min} from "rxjs/operators";

@Component({
  selector: 'app-focus',
  templateUrl: './focus.page.html',
  styleUrls: ['./focus.page.scss'],
})
export class FocusPage implements OnInit {

  focusSessionSub: Subscription
  focusSessions: FocusSession[];

  totalDayDuration: number;

  constructor(private navCtrl: NavController, private focusService: FocusService, private courseService: CourseServiceService) { }

  ngOnInit() {
    this.focusSessionSub = this.focusService.focusSessions.subscribe((item) =>
    {
      this.focusSessions = item;
      // @ts-ignore
      this.totalDayDuration = this.focusSessions.reduce((sum, current) => sum + current.duration, 0);
    });
  }

  prettyDuration(input:number) {
    let seconds = input%60
    let minutes = (input-seconds)/60

    let toRet = ""
    if (minutes === 0) {
      toRet = "00:"
    } else if (minutes < 10) {
      toRet = "0" + minutes.toString() + ":"
    } else {
      toRet = minutes.toString() + ":"
    }

    if (seconds === 0) {
      toRet = toRet + "00"
    } else if (seconds < 10) {
      toRet = toRet + "0" + seconds.toString()
    } else {
      toRet = toRet + seconds.toString()
    }

    return toRet
  }

}
