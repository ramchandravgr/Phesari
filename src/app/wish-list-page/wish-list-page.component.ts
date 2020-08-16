import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, scan, mergeMap, throttleTime } from 'rxjs/operators';
import { FirestoreCRUDService } from '../firestore-crud.service';

@Component({
  selector: 'app-wish-list-page',
  templateUrl: './wish-list-page.component.html',
  styleUrls: ['./wish-list-page.component.css']
})
export class WishListPageComponent implements OnInit {
  ids : any;
  ngOnInit(): void {
    this.dbService.get_details('WishLists').subscribe(data => {

        this.ids = data.map(e => {
          return {
            id: e.payload.doc.id,
            docID  : e.payload.doc.data()['PID']
          };
        })
        console.log(this.ids);
        console.log(this.ids.length);
  
      });
  
  }
  batch = 15;
  theEnd = false;
  debugVar : number = 0;
  offset = new BehaviorSubject(null);
  favourites: any[];
  scrollDistance=2;
  throttle=1000;
  offsetvalue : any;
  constructor(private db: AngularFirestore,private dbService : FirestoreCRUDService) {
    // const batchMap = this.offset.pipe(
    //   throttleTime(500),
    //   mergeMap(n => this.getBatch(n)),
    //   scan((acc, batch) => {
    //     return { ...acc, ...batch };
    //   }, {})
    // );
  
    // this.favourites = batchMap.pipe(map(v => Object.values(v)));
    // console.log(this.favourites)
    // console.log("i reached this!!!") 
  }

  getData() {
    for(let id of this.ids){
      console.log(id.docID)
      let item = this.dbService.get_specificDoc('Dresses',id.docID);//error code to be written
      console.log(item);
      this.favourites.push(item);
      // this.favourites.concat(item);
    }
    // return this.dbService.get_specificDoc('Dresses',)
      // .collection(''
      // .pipe(
      //   tap(arr => (arr.length ? null : (this.theEnd = true,
      //     console.log("reached end")))),
      //   map(arr => {
      //     return arr.reduce((acc, cur) => {
      //       const id = cur.payload.doc.id;
      //       const data = cur.payload.doc.data();
      //       console.log(this.infinite)
      //       console.log(cur.payload.doc.data())
      //       return { ...acc, [id]: data };
      //     }, {});
      //   })
      // );
      // console.log("i reached")
  }
  
}
