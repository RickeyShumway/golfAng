import { Injectable, OnInit, SimpleChange } from '@angular/core';
import { Player } from '../interfaces/player';
import { PLAYERS } from '../mock-players';
import { AngularFirestore, SnapshotOptions } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements OnInit{
  players$: Array<Player> = [];
  info: any;
  constructor(
    public db: AngularFirestore
  ) {}
  ngOnInit() {
    // this.getPlayers2();
    console.log('players', this.players$)
  }
  readData() {
    // return this.db.collection('golfGames').valueChanges()
    // .subscribe(
    //   (res) => {
    //     this.players$ = res
    //     console.log(res)
    //   }
    // )
  }
  getPlayer(id: number) {
    let currentPlayer = PLAYERS.filter(item => item.id === id);
    // console.log('currentPlayer', currentPlayer[0])
    return currentPlayer[0];
  }


//   getPlayers2() {
//   return this.db.collection('golfGames').valueChanges()
// };
  getPlayers2() {
  return this.db.collection('golfGames').valueChanges();

};
//   getPlayers2() {
//   return this.db.collection('golfGames').valueChanges()
//     .subscribe((res:any) => {
//         let obj: any;
//         let response = res[0].players;
//         // console.log(response);
//         this.players$ = response;
//         console.log('in function', this.players$)
//         // return this.players$;
//     })
// };

  getPlayers(): Player[] {
  return PLAYERS;
}
updateScore(arr: Player[]) {
  console.log("updatescore",arr)
  this.db.collection('golfGames').doc('5QRj9jTrbeXZXmFwN7mz')
    .set({players: [...arr]}, {merge: true});
}
startGame() {
  console.log(PLAYERS)
  let players = {
    players: PLAYERS
  }
  this.db.collection('golfGames').doc('5QRj9jTrbeXZXmFwN7mz')
    .set(players);
}
}
