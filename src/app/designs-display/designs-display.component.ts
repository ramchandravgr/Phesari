import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, scan, mergeMap, throttleTime } from 'rxjs/operators';


@Component({
  selector: 'app-designs-display',
  templateUrl: './designs-display.component.html',
  styleUrls: ['./designs-display.component.css']
})
export class DesignsDisplayComponent implements OnInit {

  ngOnInit(): void {
  }

  batch = 29;
  theEnd = false;
  debugVar : number = 0;
  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;
  scrollDistance=2;
  throttle=1000;
  offsetvalue : any;

  constructor(private db: AngularFirestore) {
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );
  
    this.infinite = batchMap.pipe(map(v => Object.values(v)));
    console.log(this.infinite)
    console.log("i reached this!!!") 
  }

  getBatch(offset) {
    this.debugVar = this.debugVar + 1;
    console.log(this.debugVar)
    console.log(offset);
    return this.db
      .collection('Dresses', ref =>
        ref
          .orderBy('cost')
          .startAfter(offset)
          .limitToLast(this.batch)
      )
      .snapshotChanges()
      .pipe(
        tap(arr => (arr.length ? null : (this.theEnd = true,
          console.log("reached end")))),
        map(arr => {
          return arr.reduce((acc, cur) => {
            const id = cur.payload.doc.id;
            const data = cur.payload.doc.data();
            console.log(this.infinite)
            console.log(cur.payload.doc.data())
            return { ...acc, [id]: data };
          }, {});
        })
      );
      console.log("i reached")
  }
  // GetOffSetValue(){

  // }

  onScroll(e,offset) {
    console.log("on scroll activated")
    console.log(e);
    // const end = this.viewport.getRenderedRange().end;
    // const total = this.viewport.getDataLength();
    // console.log(`${end}, '>=', ${total}`);
    // if (end === total) {
      this.offset.next(offset);
  }

  trackByIdx(i) {
    return i;
  }


}
