import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';
import { PLAYERS } from '../mock-players';
import { Firestore, collectionData, collection, DocumentChange} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players$: Observable<any>;
  info: any;
  constructor(
    public firestore: Firestore
  ) {
    const col = collection(firestore, 'golfGames');
    this.players$ = collectionData(col);

    // console.log(doc(col))
  }
//   getPlayers(): Player[] {

// }
  readData() {

    // console.log(this.firestore.collection('golfGames'));
  }
  getPlayer(id: number) {
    let currentPlayer = PLAYERS.filter(item => item.id === id);
    // console.log('currentPlayer', currentPlayer[0])
    return currentPlayer[0];
  }
  getPlayers(): Player[] {
  return PLAYERS;
}
//   getPlayer(id: number) {
//     let currentPlayer = PLAYERS.filter(item => item.id === id);
//     // console.log('currentPlayer', currentPlayer[0])
//     return currentPlayer[0];
//   }
}
