import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { FirestoreCRUDService } from '../firestore-crud.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  ids : any;
  Cartlist: Array<string> = [];
  ngOnInit(): void {
     this.dbService.get_specificDoc('CustomerProfile','customerID1').subscribe((ss) => {
       let fpath : firebase.firestore.FieldPath = new firebase.firestore.FieldPath('Cart');
      this.Cartlist = ss.get(fpath);
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
  constructor(private dbService : FirestoreCRUDService ,private db : AngularFirestore) {
    this.getWishlist();
  }

  getWishlist(){
    for(let j=0;j<this.Cartlist.length;j++){
      this.db.collection('Dresses',ref => {
      let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      console.log(this.Cartlist[j]) 
      query = query.limit(1).where('PID', '==', this.Cartlist[j])
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
         Cart : firebase.firestore.FieldValue.arrayRemove(PID)
     });
  }
  WishList(PID){
    //  let PID = i.PID;
     this.db.collection('CustomerProfile').doc('customerID1').update({
         Wishlist : firebase.firestore.FieldValue.arrayUnion(PID)
     });
  }
  Listview(){
    this.listview=true;
  }
  Gridview(){
    this.listview=false;
  }
}
