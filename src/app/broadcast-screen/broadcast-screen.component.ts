import { Component, OnInit } from '@angular/core';
import { DesignerPreviewData } from '../preview-data';
import { FilterData } from '../filter-data';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { map, tap, mergeMap, throttleTime, scan } from 'rxjs/operators';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { analytics } from 'firebase';
import { DataSender } from '../upload-details.model';
import { FirestoreCRUDService } from '../firestore-crud.service';

@Component({
  selector: 'app-broadcast-screen',
  templateUrl: './broadcast-screen.component.html',
  styleUrls: ['./broadcast-screen.component.css']
})

export class BroadcastScreenComponent implements OnInit {
  // private class DressTypes {
  //   designerChoices : Observable<string>;
  //   datasets : Observable<DesignerPreviewData[]>;
  //   constructor(parameters) {
      
  //   }
  // }; 
  // types : DressTypes[] = [];
  // map : Map<string,DesignerPreviewData[]>= new Map();
  datasender : DataSender[] ;
  filterdata : FilterData = new FilterData();
  designerCategs : string [] = ["Sarees","Lehengas","Shirts","T-Shirts","Other"];
  colours : string [] = ["Red","Blue","Yellow","Black","White","Green","Grey","Other"];
  budgetValues : number [] = [];
  materialTypes : string [] = ["Silk","Cotton","Woolen","Other"]
  public typeSelected;
  public colourSelected;
  public materialSelected;
  public bugMinSelected;
  public bugMaxSelected;
  searchtype: any;
  searchcolour: any;
  searchmaterial: any;
  searchbugmin: any;
  searchbugmax: any;
  Sarees : Observable<any[]>;
  offset = new BehaviorSubject(null);
  datasets : DocumentChangeAction<any>[];
  theEnd: boolean = false;
  items : any;
  previewdata$ : Observable<DesignerPreviewData[]>;
  ngOnInit(){
    // this.firestoreService.get_details('Designers').subscribe(data => {

    //   this.items = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       // age: e.payload.doc.data()['age'],
    //       cost: e.payload.doc.data()['cost'],
    //       material: e.payload.doc.data()['material'],
    //       colour: e.payload.doc.data()['colour'],
    //       imageURL: e.payload.doc.data()['imageURL'],
    //     };
    //   })
    //   console.log(this.items);

    // });
  }
  
  constructor(public firestore : AngularFirestore,public firestoreService : FirestoreCRUDService) {
    // for (let index = 0; index < 10; index++) {
    //   this.budgetValues.push(index*1000);  
    //   const batchMap = this.offset.pipe(
    //     throttleTime(500),
    //     mergeMap(n => this.GetData()),
    //     scan((acc, batch) => {
    //       return { ...acc, ...batch };
    //     }, {})
    //   );
    
    //   this.Sarees = batchMap.pipe(map(v => Object.values(v)));
    //   console.log(this.Sarees)
    //   console.log("i reached this!!!") 
    // }
   }
  // GetData() {
  //   // this.debugVar = this.debugVar + 1;
  //   // console.log(this.debugVar)
  //   // console.log(offset);
  //   return this.firestore
  //     .collection('Dresses', ref =>
  //       ref
  //         .orderBy('cost')
  //         .limitToLast(20)
  //     )
  //     .snapshotChanges()
  //     .pipe(
  //       tap(arr => (arr.length ? null : (this.theEnd = true,
  //         console.log("reached end")))),
  //       map(arr => {
  //         return arr.reduce((acc, cur) => {
  //           const id = cur.payload.doc.id;
  //           const data = cur.payload.doc.data();
  //           console.log(this.Sarees)
  //           console.log(cur.payload.doc.data())
  //           return { ...acc, [id]: data };
  //         }, {});
  //       })
  //     );
  //     console.log("i reached")
  // }
  SetTypeFilter(event){
    this.filterdata.DressType = this.typeSelected;
    console.log(this.filterdata.DressType);
    console.log(event);
  }
  SetColourFilter(event){
    this.filterdata.Colour = this.colourSelected
  }
  SetMaterialFilter(event){
    this.filterdata.Material = this.materialSelected
  }
  SetBugMinFilter(event){
    this.filterdata.BudgetMin = this.bugMinSelected
  }
  SetBugMaxFilter(event){
    this.filterdata.BudgetMax = this.bugMaxSelected
  }

  // GetData(){
  //   for(let i = 0; i < this.designerCategs.length; i++){
  //     let tempdataarray : Observable<{}>[];
  //     tempdataarray.push(this.firestore.collection("Dresses",ref => {
  //     let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
  //     query = query.limitToLast(15).orderBy("budget","asc").where('dresstype', '==', this.designerCategs[i]);
  //     // if (this.filterdata.DressType != "all") { query = query.where('dresstype', '==', this.filterdata.DressType) };
      
  //     if (this.filterdata.Colour != "all") { query = query.where('colour', '==', this.filterdata.Colour) };
  //     if (this.filterdata.Material != "all") { query = query.where('material', '==', this.filterdata.Colour) };
  //     if (this.filterdata.BudgetMin != 0) { query = query.where('budget', '>=', this.filterdata.BudgetMin) };
  //     if (this.filterdata.BudgetMax != 99999999) { query = query.where('budget', '<=', this.filterdata.BudgetMax) };
  //     return query;
  //   }).snapshotChanges()
  //   .pipe(
  //     tap(arr => (arr.length ? null : (this.theEnd = true,
  //       console.log("reached end")))),
  //     map(arr => {
  //       return arr.reduce((acc, cur) => {
  //         const id = cur.payload.doc.id;
  //         const data = cur.payload.doc.data()
  //         console.log(id + data)
  //         // tempdataarray.push({ ...acc, [id]: data });
  //         return { ...acc, [id]: data };
  //       }, {});
  //     })
  //   )
  //     );
    
    
    
    
    
    
    // .get().forEach(ref => { 
    //    ref.forEach(doc => {
    //     let tempdata : DesignerPreviewData;
        //for less calls to firestore : prefer this if it works!!!
        // tempdata = new DesignerPreviewData(doc.data().age,doc.data().budget,doc.data().colour,doc.data().dresstype,doc.data().material,doc.data().imagePath,doc.data().description)
        //this takes more calls to firestore : expensive process!!!
        // tempdata = new DesignerPreviewData(doc.get('age'),doc.get('budget'),doc.get('colour'),doc.get('dresstype'),doc.get('material'),doc.get('imagePath'),doc.get('description'))
        // tempdataarray.push(tempdata) 
    //   })
    // }) 
  //      let ds : DataSender = new DataSender(this.designerCategs[i],tempdataarray);
  //      this.datasender.push(ds);
  // //  }
  // }
}
