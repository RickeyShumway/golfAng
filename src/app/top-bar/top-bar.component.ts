import { Component, OnInit, OnChanges } from '@angular/core';
import {SimpleChanges} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelect } from '@angular/material/select'
import { SecondBarComponent } from '../second-bar/second-bar.component';
import { ApiCallService  } from '../api-call.service';
import { Course } from '../course-info';
import { MatFormField } from '@angular/material/form-field'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  title = 'Golf Scorecard';
  courseList: any;
  constructor(private apiCall: ApiCallService) { }
  selected: number = 0;
  chooseCourse(id: number) {
    console.log(`find me${id} course`)
    this.apiCall.getHoles(id);
  }
  chooseTee(id: number) {
    this.apiCall.changeTee(id);
  }
  ngOnInit(): void {
    this.apiCall.getCourses()
    .subscribe((res=> {
      this.courseList = res.courses;
      // console.log('courselist', this.courseList)
    }));
  }
  ngOnChanges(changes: SimpleChanges) {
    let difVal = changes['selected'];
    console.log(difVal)
    // this.apiCall.getHoles(difVal)
    // .subscribe((res=> {
    //   console.log('response', res)
    // }));
  }


}
