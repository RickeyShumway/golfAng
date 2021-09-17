import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Courses, Course } from './course-info';
import { RouteReuseStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService { 
  currentCourse$:any;
  courseName$: any;
  currentTee$: number = 0;
  constructor(private http: HttpClient) { }
    getCourses(): Observable<Courses> {
    return this.http.get<Courses>('https://golf-courses-api.herokuapp.com/courses');
  }
    getHoles(id:number): Observable<any> {
      let call$: Observable<any> = this.http.get<any>('https://golf-courses-api.herokuapp.com/courses/' + id)
      call$.subscribe((x) => {
        this.currentCourse$ = x.data.holes;
        this.courseName$ = x.data.name;
        console.log('courseName', this.courseName$)
      });
      console.log("in the api",this.currentCourse$[0]);
      return call$;
    }
    // getHoles(id:number): Observable<any> {
    //   return this.http.get<any>('https://golf-courses-api.herokuapp.com/courses/' + id)
    // }
}
