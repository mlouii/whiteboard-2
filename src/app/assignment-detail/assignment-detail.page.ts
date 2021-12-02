import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";
import {Assignment, CourseServiceService} from "../services/couse-service.service";

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.page.html',
  styleUrls: ['./assignment-detail.page.scss'],
})
export class AssignmentDetailPage implements OnInit {

  assignment: Assignment

  otherAssignments: Assignment[]
  courseName: string;

  timeLeft: string

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private courseService: CourseServiceService) { }

  ngOnInit() {
    this.assignment = null;
    this.otherAssignments = null;


    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('assignmentId')) {
        this.navCtrl.navigateBack('');
        return;
      } else {
        this.assignment = this.courseService.get_assignment_by_id(parseInt(paramMap.get('assignmentId')))
        let all_course_assignments = this.courseService.get_assignments_by_course(this.assignment.courseID)
        this.otherAssignments = all_course_assignments.filter((item) => item.id != this.assignment.id)

        this.timeLeft = this.courseService.time_to_string(this.assignment.timeLeft)
        this.courseName = this.courseService.get_courses().find((item) => item.id === this.assignment.courseID).name
      }
    })
  }

}
