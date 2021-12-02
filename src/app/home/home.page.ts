import { Component } from '@angular/core';
import {Assignment, CourseServiceService} from "../services/couse-service.service";
import {FocusService} from "../services/focus.service";
import {Subscription} from "rxjs";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  assignments: Assignment[];
  thisWeekAssignments: Assignment[];
  nextWeekAssignments: Assignment[];

  smallestDuration = "waiting!";

  minutesLeftSub: Subscription;
  secondsLeftSub: Subscription;
  minutesLeft:number;
  secondsLeft:number;

  constructor(private courseService: CourseServiceService, private focusService: FocusService, private navCtrl: NavController) {}

  ionViewWillEnter() {
    this.assignments = this.courseService.get_all_assignments();

    this.thisWeekAssignments = this.assignments.filter((item) => (item.timeLeft < 168))
    this.nextWeekAssignments = this.assignments.filter((item) => (item.timeLeft >= 168))

    this.smallestDuration = this.courseService.time_to_string(Math.min(...this.assignments.map((item) => item.timeLeft)))
  }
}
