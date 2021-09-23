import { Component, OnInit, SimpleChange } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayerService } from '../services/player.service';
import { Player } from '../interfaces/player';
import { NgClass, NgStyle } from '@angular/common';
import { ApiCallService } from '../api-call.service';
import { observable } from 'rxjs';
@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})

export class Table2Component implements OnInit {
  players: Player[]=[];
  fillColor:string = 'black';
  constructor(private playerService: PlayerService, public api: ApiCallService) { }
  ngOnInit(): void {
    this.playerService.readData();
    // this.players$ = this.playerService.players$;
    this.playerService.getPlayers2().subscribe((res:any) => {
      let obj: any;
      let response = res[0].players;
      // console.log(response);
      this.players = response;
      console.log('in function', this.players)
      // return this.players$;
  })
    // this.getPlayers();
    // ÷console.log('player service', this.playerService.players$)


  }
  ngOnChanges(change: SimpleChange) {
    console.log("change made",change)
    // this.playerService.updateScore(change);
  }
  getPlayers(): void {
    this.players = this.playerService.getPlayers();
    // this.players$ = this.playerService.players$;
  }
  updateScore() {
    this.playerService.updateScore(this.players);
  }
  get getColor(): string {
    switch (this.api.currentTee$) {
      case 0:
        return 'black';
      case 1:
        return 'blue'
      case 2:
        return 'white'
      case 3:
        return 'red'
      default:
        return 'black';
    }
  }
}
