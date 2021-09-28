import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../interfaces/player';

@Component({
  selector: 'app-player',
  // template: '<div>Hello from player {{playerId}}</div>',
  templateUrl: './player2.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() playerId!: number;
  player!: Player;
  constructor(private playerService: PlayerService) {

   }

  ngOnInit(): void {
    this.player = this.playerService.getPlayer(this.playerId)
  }
  public get firstHalf(): number [] {
    return this.player.holeScore.slice(0, 9);
  }
  public get secondHalf(): number[] {
    return this.player.holeScore.slice(9, 18)
  }
  public get inTotal(): Number {
    let arr = this.player.holeScore.slice(9, 18);
    return arr.reduce((a, b)=> a+b);
  }
  public get outTotal(): Number {
    let arr = this.firstHalf;
    return arr.reduce((a, b)=> a+b);
  }
  public get total(): Number {
    return this.player.holeScore.reduce((a, b)=> a+b)
  }
  update(): void {
      console.log(this.player.holeScore)


  }

}


