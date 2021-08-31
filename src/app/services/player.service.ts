import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';
import { PLAYERS } from '../mock-players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }
  getPlayers(): Player[] {
    return PLAYERS
  }
}
