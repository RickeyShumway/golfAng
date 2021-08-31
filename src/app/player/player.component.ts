import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { 
    
   }

  ngOnInit(): void {
  }
  name: string = 'Player 1';
  holeScore: number[] = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];
  finished: boolean = false;
  public get firstHalf(): number [] {
    return this.holeScore.slice(0, 9);
  }
  public get inTotal(): Number {
    let arr = this.holeScore.slice(9, 18);
    return arr.reduce((a, b)=> a+b);
  }
  public get outTotal(): Number {
    let arr = this.firstHalf;
    return arr.reduce((a, b)=> a+b);
  }

  public get total(): Number {
    return this.holeScore.reduce((a, b)=> a+b)
  }
  update(): void {
      console.log(this.holeScore)
  }
} 
