import { Injectable } from '@angular/core';

export interface Course {
  name: string;
  professorName: string;
  assignmentIDs: number[];
  id: number;
  color: string;
}

export interface Assignment {
  name: string;
  id: number;
  courseID: number;
  studentID: number;
  totalPoints: number;
  timeLeft: number;
  expectedTime: number;
  gradePercent: number;
  description: string;
}

export interface Student {
  name: string;
  id: number;
  courses: number[];
}

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  public default_student_id = 1;

  public courses: Course[] = [
    {
      name: "Software Engineering",
      professorName: "Joe Dixon",
      assignmentIDs: [1],
      id: 1,
      color: "blue",
    },
    {
      name: "Probability and Statistics",
      professorName: "Maria Freeman",
      assignmentIDs: [3, 4],
      id: 2,
      color: "red",
    },
    {
      name: "Industrial Psychology",
      professorName: "Patrick Bateman",
      assignmentIDs: [5, 6],
      id: 3,
      color: "yellow",
    },
    {
      name: "Computers and Society",
      professorName: "Matthew Bauer",
      assignmentIDs: [7],
      id: 4,
      color: "purple",
    },
  ];

  public students: Student[] = [
    {
      name: "Mark Lou",
      id: 1,
      courses: [1, 2, 3, 4]
    }
  ]

  public assignments: Assignment[] = [
    {
      name: "Final Research Paper",
      id: 1,
      courseID: 1,
      studentID: 1,
      timeLeft: 26,
      totalPoints: 100,
      expectedTime: 6,
      gradePercent: 10,
      description: "Single .doc or .pdf file.\n" +
        "Must contain a cover / title page. \n" +
        "Must address all items in the Research Paper Description ppt.\n" +
        "Must properly cite all sources."
    },
    {
      name: "Final Presentation",
      id: 2,
      courseID: 4,
      studentID: 1,
      timeLeft: 53,
      totalPoints: 100,
      expectedTime: 4,
      gradePercent: 8,
      description: "One member of each team should submit a presentation (e.g., narrated .PPT) of the team's prototype focusing on the value (capabilities / functionality) and the engineering (design decisions)."
    },
    {
      name: "Quiz 9",
      id: 3,
      courseID: 2,
      studentID: 1,
      timeLeft: 75,
      totalPoints: 100,
      expectedTime: 0.5,
      gradePercent: 1,
      description: "Please refer to the general homework instructions which are the first post under Assignments.\n" +
        "=========== Reading =======\n" +
        "Sections: 8.3, 8.4, 8.5, 8.6, 8.7\n" +
        "======== Problems =========\n" +
        "# 8.18, 8.20, 8.23, 8.25, 8.34\n" +
        "# 8.38a, 8.40c, 8.47b, 8.51cd (use tables in appendix A; 1pt each)\n" +
        "# 8.41, 8.52, 8.59, 8.75"
    },
    {
      name: "Discussion 8",
      id: 4,
      courseID: 3,
      studentID: 1,
      timeLeft: 80,
      totalPoints: 100,
      expectedTime: 0.2,
      gradePercent: 0.5,
      description: "Please contact the TAs or instructor with any questions."
    },
    {
      name: "Quiz 10",
      id: 5,
      courseID: 2,
      studentID: 1,
      timeLeft: 218,
      totalPoints: 100,
      expectedTime: 0.5,
      gradePercent: 1,
      description: "Please find here a Sample midterm exam, containing problems that I asked in prior semesters. Please be sure to read the disclaimer, and don't forget to bring your self-prepared formula sheet. "
    },
    {
      name: "Discussion 9",
      id: 6,
      courseID: 3,
      studentID: 1,
      timeLeft: 80,
      totalPoints: 101,
      expectedTime: 0.2,
      gradePercent: 0.5,
      description: "Please contact the TAs or instructor with any questions."
    },
    {
      name: "Discussion 11",
      id: 7,
      courseID: 3,
      studentID: 1,
      timeLeft: 340,
      totalPoints: 101,
      expectedTime: 0.2,
      gradePercent: 0.5,
      description: "Please contact the TAs or instructor with any questions."
    },
    {
      name: "Discussion 12",
      id: 8,
      courseID: 3,
      studentID: 1,
      timeLeft: 540,
      totalPoints: 101,
      expectedTime: 0.2,
      gradePercent: 0.5,
      description: "Please contact the TAs or instructor with any questions."
    }
  ]



  constructor() { }


  public get_courses_by_student(id: number) : Course[] {
    let all_courses: number[] = this.students.find((item) => item.id === id).courses
    return this.courses.filter((item) => all_courses.includes(item.id))
  }

  public get_assignments_by_student_and_course(studentId:number, courseId:number) : Assignment[] {
    let student_courses: Course[] = this.get_courses_by_student(studentId);
    let student_courses_ids = student_courses.map((item) => item.id);
    return (this.assignments.filter((item) => student_courses_ids.includes(item.courseID)).filter((item) => item.courseID === courseId));
  }

  public get_name_of_courseID(courseID) : string {
    return this.courses.find((item) => item.id === courseID).name;
  }


  public time_to_string(duration:number) : string {

    let toRet = ""
    let weeks = duration%168;
    if (weeks !== duration) {
      weeks = (duration-weeks)/168

      if (weeks === 1) {
        toRet = toRet + `${weeks} Week `
      } else {
        toRet = toRet + `${weeks} Weeks `
      }
      duration = duration - weeks*168

      let days = duration%24
      days = (duration-days)/24
      if (days === 1) {
        toRet = toRet + `${days} Day`
      } else {
        toRet = toRet + `${days} Days`
      }
      return toRet
    } else {
      let days = duration%24
      days = (duration-days)/24
      if (days === 1) {
        toRet = toRet + `${days} Day `
      } else {
        toRet = toRet + `${days} Days `
      }
      duration = duration - days*24

      if (duration === 1) {
        toRet = toRet + `${duration} Hour`
      } else {
        toRet = toRet + `${duration} Hours`
      }
      return toRet
    }



  }

  public getColorOfAssignmentID(assignment: Assignment) : string {
    return "10px solid "+ this.get_courses().find((course) => course.id === assignment.courseID).color;
  }


  public get_courses() : Course[] {
    return this.get_courses_by_student(this.default_student_id);
  }

  public get_assignments_by_course(courseId): Assignment[] {
    return this.get_assignments_by_student_and_course(this.default_student_id, courseId);
  }

  public get_assignment_by_id(id: number) : Assignment {
    return this.assignments.find((item) => item.id === id);
  }

  public get_all_assignments() {
    return this.assignments;
  }


}
