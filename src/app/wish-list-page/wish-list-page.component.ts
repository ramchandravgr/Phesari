import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, scan, mergeMap, throttleTime, concatMap, switchMap } from 'rxjs/operators';
import { FirestoreCRUDService } from '../firestore-crud.service';

@Component({
  selector: 'app-wish-list-page',
  templateUrl: './wish-list-page.component.html',
  styleUrls: ['./wish-list-page.component.css']
})
export class WishListPageComponent implements OnInit {
  ids : any;
  Wishlist: Array<string> = [];
  ngOnInit(): void {
     this.dbService.get_specificDoc('CustomerProfile','customerID1').subscribe((ss) => {
       let fpath : firebase.firestore.FieldPath = new firebase.firestore.FieldPath('Wishlist');
      this.Wishlist = ss.get(fpath);
      this.getWishlist();
    });;
  }
  batch = 15;
  theEnd = false;
  debugVar : number = 0;
  offset = new BehaviorSubject(null);
  favourites: any = [];
  scrollDistance=2;
  throttle=1000;
  offsetvalue : any;
  listview : boolean = true;
  i : number = 0;
  constructor(private dbService : FirestoreCRUDService,private db : AngularFirestore) {
    this.getWishlist();
  }

  getWishlist(){
    for(let j=0;j<this.Wishlist.length;j++){
      this.db.collection('Dresses',ref => {
      let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      console.log(this.Wishlist[j])
      query = query.limit(1).where('PID', '==', this.Wishlist[j])
      return query;
      })
    .snapshotChanges().subscribe(data => {
      return data.map(e => {
          const data = e.payload.doc.data();
          console.log(data);
          this.favourites.push(data);
      })
    })
    }
  }
  getData() {
     this.getWishlist();
  }
  Remove(PID){
    //  let PID = i.PID;
     this.db.collection('CustomerProfile').doc('customerID1').update({
         Wishlist : firebase.firestore.FieldValue.arrayRemove(PID)
     });
  }
  Cart(PID){ 
     this.db.collection('CustomerProfile').doc('customerID1').update({
         Cart : firebase.firestore.FieldValue.arrayUnion(PID)
     });
  }
  Listview(){
    this.listview=true;
  }
  Gridview(){
    this.listview=false;
  }
}