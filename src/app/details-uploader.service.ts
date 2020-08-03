import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
// import { UploadDetails } from 'src/app/upload-details.model';

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
  AddImageURL(str: string,doc : string,url : any){
    this.firestore.collection(str).doc(doc).update({
      imgURL: url
  })
  .then(function() {
      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });
  
  }
  // deletePolicy(details : UploadDetails){
  //   this.firestore.doc('CustomeruploadDetails/' + details.CustomerID).delete();
  // }


}
