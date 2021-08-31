import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../interfaces/player';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  players: Player[]=[];
  constructor(private playerService: PlayerService) { }
  ngOnInit(): void {
    this.getPlayers();
  }
  getPlayers(): void {
    this.players = this.playerService.getPlayers();
  }

}
