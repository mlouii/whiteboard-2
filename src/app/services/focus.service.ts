import { Injectable } from '@angular/core';
import {Assignment, Course, CourseServiceService} from "./couse-service.service";
import {BehaviorSubject, interval, Subscription} from "rxjs";
import {min, take} from "rxjs/operators";
import {AlertController} from "@ionic/angular";

export interface FocusSession {
  assignment: Assignment;
  startTime: Date;
  duration: Number;
}

@Injectable({
  providedIn: 'root'
})

export class FocusService {

  public focusSessions = new BehaviorSubject<FocusSession[]>([
    {
      assignment: this.courseService.get_all_assignments()[0],
      startTime: new Date(),
      duration: 1800
    },
    {
      assignment: this.courseService.get_all_assignments()[0],
      startTime: new Date(),
      duration: 1800
    },
    {
      assignment: this.courseService.get_all_assignments()[3],
      startTime: new Date(),
      duration: 1800
    },
    {
      assignment: this.courseService.get_all_assignments()[4],
      startTime: new Date(),
      duration: 1800
    }
  ])

  private currentFocusSession: FocusSession;

  public minutesLeft = new BehaviorSubject<number>(0);
  public secondsLeft = new BehaviorSubject<number>(0);

  public isSelecting = new BehaviorSubject<boolean>(false);
  public isActive = new BehaviorSubject<boolean>(false);
  public currentAssignment = new BehaviorSubject<Assignment>(null);

  private subscription: Subscription;

  constructor(public alertController: AlertController, public courseService: CourseServiceService) {
    this.subscription = interval(1000).subscribe(_ => {this.tick()})
  }

  async presentAlert(subheader, message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error in Focus Session',
      subHeader: subheader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  public start(minutes: number, seconds: number) {
    if (!minutes) {
      this.presentAlert("You need to enter the number of minutes!", "Use the input field");
      return
    }

    if (minutes < 0) {
      this.presentAlert("Please enter a valid number of minutes!", "Minutes have to be positive");
      return
    }

    this.isSelecting.next(false);
    if (!this.isActive.value) {
      this.minutesLeft.next(minutes);
      this.secondsLeft.next(seconds);
      this.isActive.next(true);

      this.currentFocusSession = {
        assignment: this.currentAssignment.value,
        startTime: new Date(),
        duration: 60*minutes + seconds
      }
    }
  }

  public select(assignment: Assignment) {
    if (this.isActive.value) {
      this.presentAlert('Stop the current focus session to continue','Hit the stop button');
      return
    } else {
      this.currentAssignment.next(assignment);
      this.isSelecting.next(true);
    }
  }

  public stop() {
    if (this.isActive) {
      // @ts-ignore
      this.currentFocusSession.duration = (this.currentFocusSession.duration - (60*this.minutesLeft.value + this.secondsLeft.value));
      this.focusSessions.pipe(take(1)).subscribe(
        (item) => {let sessions = item; sessions.push(this.currentFocusSession); this.focusSessions.next(sessions)}
      )
      this.isActive.next(false)
      console.log(this.focusSessions.value);
    }
  }


  private tick() {
    this.secondsLeft.next(this.secondsLeft.value-1);
    if (this.minutesLeft.value <= 0 && this.secondsLeft.value <= 0) {
      this.isActive.next(false);
      this.minutesLeft.next(0);
      this.secondsLeft.next(0);
      return;
    } else {
      if (this.secondsLeft.value < 1) {
        this.minutesLeft.next(this.minutesLeft.value-1);
        this.secondsLeft.next(59);
      }
    }
  }


}
