import { Component, OnInit } from '@angular/core';
import {CourseServiceService} from "../services/couse-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  name: string;
  constructor(private courseService: CourseServiceService, private router: Router) { }

  ngOnInit() {
    this.name = this.courseService.students.find((student) => (student.id === this.courseService.default_student_id)).name;
  }

  logout() {
    this.router.navigateByUrl("/login");
  }

}
