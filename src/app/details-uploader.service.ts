import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { UploadDetails } from 'src/app/upload-details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsUploaderService {

  constructor(public firestore: AngularFirestore) { }

  getDetails() {
    return this.firestore.collection('CustomeruploadDetails').snapshotChanges();
  }
  AddDetails (Record,type : string,name : string){
    return this.firestore.collection(type).doc(name).set(Record);
  }
  updatePolicy(details : UploadDetails){
    delete details.CustomerID;
    this.firestore.doc('CustomeruploadDetails/' + details.CustomerID).update(details);
  }
  deletePolicy(details : UploadDetails){
    this.firestore.doc('CustomeruploadDetails/' + details.CustomerID).delete();
  }


}
