import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';
import { PLAYERS } from '../mock-players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }
  getPlayers(): Player[] {
  return PLAYERS;
}
  getPlayer(id: number) {
    let currentPlayer = PLAYERS.filter(item => item.id === id);
    // console.log('currentPlayer', currentPlayer[0])
    return currentPlayer[0];
  }
}
