import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayerService } from '../services/player.service';
import { Player } from '../interfaces/player';
import { NgClass, NgStyle } from '@angular/common';
import { ApiCallService } from '../api-call.service';
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
    this.getPlayers();


  }
  getPlayers(): void {
    this.players = this.playerService.getPlayers();
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
