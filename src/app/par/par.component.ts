import { Component, OnInit } from '@angular/core';
import { ApiCallService  } from '../api-call.service';
import { Course } from '../course-info';

@Component({
  selector: 'app-par',
  templateUrl: './par.component.html',
  // template: "<div>{{courseList[1].name}}</div>",
  styleUrls: ['./par.component.scss']
})
export class ParComponent implements OnInit {
  courseHoles: any = [];
  response: any;
  hole: any;
  test: boolean = true;
  constructor(
    public apiCall: ApiCallService
    ) { }

  // ngOnInit(): void {
  //   if (this.apiCall.holes) {
  //     this.apiCall.holes.subscribe((res: Response) => {
  //       this.courseHoles = res})
  //   } else {
      
  //   }
    
  //   console.log("these are the par",this.courseHoles)
  // }
  ngOnInit(): void {
    // this.apiCall.getHoles(18300)
    // .subscribe((res => {
    //   this.courseHoles = res.data.holes;
    //   this.hole = res.data.holes[6].hole;
    //   console.log('response', res.data.holes[0].hole)
    //   console.log('holes', this.courseHoles)
    // }));
    console.log(this.apiCall.currentCourse$)
  }


}
