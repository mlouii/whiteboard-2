import {Component, Input, OnInit} from '@angular/core';
import {Assignment, CourseServiceService} from "../services/couse-service.service";
import {FocusService} from "../services/focus.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {

  @Input() assignment: Assignment

  courseName: string
  timeDuration: string

  constructor(private courseService: CourseServiceService, private focusService: FocusService, private router: Router) { }

  ngOnInit() {
    this.courseName = this.courseService.get_name_of_courseID(this.assignment.courseID);
    this.timeDuration = this.courseService.time_to_string(this.assignment.timeLeft);
  }

  selectFocusSession() {
    this.focusService.select(this.assignment);
  }

  onClick() {
    this.router.navigate(['/', 'detail', this.assignment.id])
  }
}
