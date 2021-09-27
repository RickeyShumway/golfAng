import { Component, OnInit } from '@angular/core';
import { ApiCallService} from "src/app/api-call.service";
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-second-bar',
  templateUrl: './second-bar.component.html',
  styleUrls: ['./second-bar.component.scss']
})
export class SecondBarComponent implements OnInit {
  message: any;
  constructor(
    public apiCall: ApiCallService,
    public db: PlayerService
      ) { }

  ngOnInit(): void {

  }
  get getTee() {
    let t = this.apiCall.currentTee$;
    switch (t) {
      case 0:
        return 'Black';
      case 1:
        return "Blue";
      case 2:
        return 'White';
      case 3:
        return 'Red';
      default:
        return 'Black';

    }

  }
  finishMessage() {
    
  }

}
