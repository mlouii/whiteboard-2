import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-graded-work',
  templateUrl: './graded-work.page.html',
  styleUrls: ['./graded-work.page.scss'],
})
export class GradedWorkPage implements OnInit {

  gradedAssignments = [
    {
      name: "Software Engineering: HW 4",
      date: "Graded on 11/15/2021",
      scored: 93,
      total: 100,
      change: "-0.342",
      color: "blue"
    },
    {
      name: "Software Engineering: HW 3",
      date: "Graded on 11/12/2021",
      scored: 100,
      total: 100,
      change: "+0.142",
      color: "blue"
    },
    {
      name: "Probability and Statistics: Quiz 6",
      date: "Graded on 10/30/2021",
      scored: 78,
      total: 100,
      change: "-0.342",
      color: "red"
    },
    {
      name: "Industrial Psychology: Quiz 3",
      date: "Graded on 10/25/2021",
      scored: 100,
      total: 100,
      change: "+2.342",
      color: "yellow"
    },
  ]

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  private greenOrRed(str) {
    if (str[0] === "+") {
      return "green"
    }
    return "red"
  }

  private greenOrOrange(inputt) {
    if (inputt >= 0.9) {
      return "green"
    }
    return "orange"
  }

}
