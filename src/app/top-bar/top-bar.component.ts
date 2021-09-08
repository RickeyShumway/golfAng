import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SecondBarComponent } from '../second-bar/second-bar.component';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  title = 'Golf Scorecard';
  course= "Selected Course"
  constructor() { }

  ngOnInit(): void {
  }

}
