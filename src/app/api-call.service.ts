import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Courses, Course } from './course-info';
import { RouteReuseStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }
    getCourses(): Observable<Courses> {
    return this.http.get<Courses>('https://golf-courses-api.herokuapp.com/courses');
  }
    getHoles(id:number): Observable<Course> {
      return this.http.get<Course>('https://golf-courses-api.herokuapp.com/courses/' + id)
    }
}
