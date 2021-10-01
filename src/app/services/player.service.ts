import { Injectable, OnInit, SimpleChange } from '@angular/core';
import { Player } from '../interfaces/player';
import { PLAYERS } from '../mock-players';
import { AngularFirestore, SnapshotOptions } from '@angular/fire/compat/firestore';
import { Observable, of, pipe } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { ThrowStmt } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class PlayerService implements OnInit{
  players$: Array<Player> = [];
  info: any;
  constructor(
    public db: AngularFirestore,
  ) {}
  ngOnInit() {
    // this.getPlayers2().subscribe((res:any) => this.players$ = res[0].players);
    // console.log('players in init', this.players$)
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
// updateScore2(player: Player, ind: number) {
//   this.db.collection('golfGames').valueChanges()
//   .pipe(
//     // startWith(''),
//     map((x: any) => {
//       console.log('pip',x[0].players)
//       let arr = x[0].players
//       player.name = x[0].players[ind-1].name
//       arr.splice(ind-1, 1, player);
//       console.log('sub2',arr)
//       this.players$ = arr;
//       console.log(this.players$)
//     })
//     )
//     .subscribe();
//     console.log('plz',this.players$)
//     if(this.players$ === []) {
//     } else {
//       this.updateScore(this.players$);

//     }

// }
// updateScore2(player: Player, ind: number) {

//   return this.db.collection('golfGames').doc('5QRj9jTrbeXZXmFwN7mz')
//   .where('players', )


// }
// updateScore2(player: Player, ind: number) {
//   this.getPlayers2().subscribe(
//     (res: any) => {
//       let arr = [...res[0].players]
//       console.log('sub', res[0].players)
//       player.name = res[0].players[ind-1].name
//       arr.splice(ind-1, 1, player);
//       console.log('sub2',arr)
//       this.players$ = arr;
//       // console.log('sub3', this.players$)
//       localStorage.setItem('players', JSON.stringify(arr));
//       this.updateScore(arr);
//     }
//     );
//     let thing = JSON.parse(localStorage.getItem('players')!);
//     console.log("end",this.players$)
//     // this.updateScore(this.players$)

//       // console.log("local", thing)


// }
// updateScore2(player: Player, ind: number) {
//   this.getPlayers2().subscribe((res:any) => {
//     let obj: any;
//     let response = res[0].players;
//     // console.log(response);
//     this.players$ = response;
//     this.players$.splice(ind-1, 1, player);
//     console.log('individual', this.players$)

//     // return this.players$;
//   });
//   this.updateScore(this.players$);
// }
startGame() {
  console.log(PLAYERS)
  let players = {
    players: PLAYERS
  }
  this.db.collection('golfGames').doc('5QRj9jTrbeXZXmFwN7mz')
    .set(players);
}
}
