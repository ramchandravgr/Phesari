import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  get windowRef(){
    return window
  }

   newUser: any;

  constructor(private db: AngularFirestore) { }
 
   insertUserData(userCredential: firebase.auth.UserCredential) {
     return this.db.doc(`Phone/${userCredential.user.uid}`).set({
       userid: this.newUser.userid,
       phoneNumber: this.newUser.phonenumber,
       role: 'Designer'
     })
   }

}