import { Component, OnInit } from '@angular/core';
import { ApiCallService} from "src/app/api-call.service";

@Component({
  selector: 'app-second-bar',
  templateUrl: './second-bar.component.html',
  styleUrls: ['./second-bar.component.scss']
})
export class SecondBarComponent implements OnInit {
  
  constructor(public apiCall: ApiCallService) { }

  ngOnInit(): void {
   
  }

}
