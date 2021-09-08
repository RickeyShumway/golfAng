import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayerService } from '../services/player.service';
import { Player } from '../interfaces/player';
@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit {
  players: Player[]=[];
  constructor(private playerService: PlayerService) { }
  ngOnInit(): void {
    this.getPlayers();
  }
  getPlayers(): void {
    this.players = this.playerService.getPlayers();
  }

}
