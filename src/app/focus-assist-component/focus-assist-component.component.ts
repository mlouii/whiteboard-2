import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {FocusService} from "../services/focus.service";
import {Assignment} from "../services/couse-service.service";

@Component({
  selector: 'app-focus-assist-component',
  templateUrl: './focus-assist-component.component.html',
  styleUrls: ['./focus-assist-component.component.scss'],
})
export class FocusAssistComponentComponent implements OnInit {

  minutesLeftSub: Subscription;
  secondsLeftSub: Subscription;
  assignmentSub: Subscription;
  activeSub: Subscription;
  selectingSub: Subscription;


  minutesLeft:string;
  secondsLeft:string;
  currentAssignment: Assignment;
  isActive: boolean;
  isSelecting: boolean;

  selectedMinutes: 2;

  constructor(private focusService: FocusService) { }

  ngOnInit() {
    this.minutesLeftSub = this.focusService.minutesLeft.subscribe(result => {this.minutesLeft = this.addZeroes(result)});
    this.secondsLeftSub = this.focusService.secondsLeft.subscribe(result => {this.secondsLeft = this.addZeroes(result)});
    this.assignmentSub = this.focusService.currentAssignment.subscribe(result => {this.currentAssignment = result});
    this.activeSub = this.focusService.isActive.subscribe(result => {this.isActive = result});
    this.selectingSub = this.focusService.isSelecting.subscribe(result => {this.isSelecting = result});
  }

  private addZeroes(num: number) : string {
    if (num < 10) {
      return "0"+ num.toString();
    } else {
      return num.toString();
    }
  }

  stopTask() {
    this.focusService.stop();
  }

  startTask() {
    this.focusService.start(this.selectedMinutes, 0);
  }

}
