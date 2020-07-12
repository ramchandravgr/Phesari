import { Component, OnInit } from '@angular/core';
import { DesignerPreviewData } from '../preview-data';
import { FilterData } from '../filter-data';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { analytics } from 'firebase';
import { DataSender } from '../upload-details.model';

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
  datasets : DocumentChangeAction<any>[];
  constructor(public firestore : AngularFirestore) {
    for (let index = 0; index < 10; index++) {
      this.budgetValues.push(index*1000);  
    }
   }

  ngOnInit(): void {
    this.GetData();
  }
  SetTypeFilter(event){
    this.filterdata.DressType = this.typeSelected;
    this.GetData();
    console.log(this.filterdata.DressType);
    console.log(event);
  }
  SetColourFilter(event){
    this.GetData();
    this.filterdata.Colour = this.colourSelected
  }
  SetMaterialFilter(event){
    this.GetData();
    this.filterdata.Material = this.materialSelected
  }
  SetBugMinFilter(event){
    this.GetData();
    this.filterdata.BudgetMin = this.bugMinSelected
  }
  SetBugMaxFilter(event){
    this.GetData();
    this.filterdata.BudgetMax = this.bugMaxSelected
  }

  GetData(){
    for(let i = 0; i < this.designerCategs.length; i++){
      let tempdataarray : DesignerPreviewData[] = [];
       this.firestore.collection(this.designerCategs[i],ref => {
      let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.limitToLast(15).orderBy("budget","asc")
      if (this.filterdata.DressType != "all") { query = query.where('dresstype', '==', this.filterdata.DressType) };
      if (this.filterdata.Colour != "all") { query = query.where('colour', '==', this.filterdata.Colour) };
      if (this.filterdata.Material != "all") { query = query.where('material', '==', this.filterdata.Colour) };
      if (this.filterdata.BudgetMin != 0) { query = query.where('budget', '>=', this.filterdata.BudgetMin) };
      if (this.filterdata.BudgetMax != 99999999) { query = query.where('budget', '<=', this.filterdata.BudgetMax) };
      return query;
    }).get().forEach(ref => { 
       ref.forEach(doc => {
        let tempdata : DesignerPreviewData;
        //for less calls to firestore : prefer this if it works!!!
        // tempdata = new DesignerPreviewData(doc.data().age,doc.data().budget,doc.data().colour,doc.data().dresstype,doc.data().material,doc.data().imagePath,doc.data().description)
        //this takes more calls to firestore : expensive process!!!
        tempdata = new DesignerPreviewData(doc.get('age'),doc.get('budget'),doc.get('colour'),doc.get('dresstype'),doc.get('material'),doc.get('imagePath'),doc.get('description'))
        tempdataarray.push(tempdata) 
      })
    }) 
       let ds : DataSender = new DataSender(this.designerCategs[i],tempdataarray);
       this.datasender.push(ds);
   }
  }
}
