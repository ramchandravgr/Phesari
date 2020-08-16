import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreCRUDService {
  constructor(public fireservices: AngularFirestore) { }

  add_details(Record,collectionID : string)
  {
    return this.fireservices.collection(collectionID).add(Record);
  }

  get_specificDoc(collectionID : string,recordID){
    return this.fireservices.doc(collectionID + '/' + recordID).get(); 
  }

  get_details(collectionID : string)
  {
    return this.fireservices.collection(collectionID).snapshotChanges();
  }

  update_details(recordID, record,collectionID : string)
  {
    return this.fireservices.doc(collectionID + '/' + recordID).update(record);
  }

  delete_details(recordID,collectionID : string)
  {
    return this.fireservices.doc(collectionID + '/' + recordID).delete();
  }

}
