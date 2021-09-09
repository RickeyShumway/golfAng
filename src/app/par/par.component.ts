import { Component, OnInit } from '@angular/core';
import { ApiCallService  } from '../api-call.service';
import { Course } from '../course-info';

@Component({
  selector: 'app-par',
  // templateUrl: './par.component.html',
  template: "<div>{{courseList[0].name}}</div>",
  styleUrls: ['./par.component.scss']
})
export class ParComponent implements OnInit {
  courseList: any;
  response: any;
  constructor(private apiCall: ApiCallService) { }

  ngOnInit(): void {
    this.apiCall.getCourses()
    .subscribe((res=> {
      this.courseList = res.courses;
      console.log('courselist', this.courseList)
    }));

  }

}
