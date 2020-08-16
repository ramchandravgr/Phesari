import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, scan, mergeMap, throttleTime } from 'rxjs/operators';
import { DesignerPreviewData } from '../preview-data';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FilterData } from '../filter-data';


@Component({
  selector: 'app-designs-display',
  templateUrl: './designs-display.component.html',
  styleUrls: ['./designs-display.component.css']
})
export class DesignsDisplayComponent implements OnInit {
  batch = 15;
  theEnd = false;
  debugVar : number = 0;
  offset = new BehaviorSubject(null);
  designs: Observable<any[]>;
  scrollDistance=2;
  throttle=1000;
  offsetvalue : any;
  previewdata : DesignerPreviewData[];
  dropdownSettings : IDropdownSettings = {};
  dresstypes = [];
  colours = [];
  materials = [];
  colourselected = [];
  matselected = [];
  typeselected = [];
  filterdata : FilterData;
  bugMinSelected: number;
  ngOnInit(){
    this.dresstypes = [
      {id: 1, name: 'Saree'},
      {id: 2, name: 'Lehengas'},
      {id: 3, name: 'Kurtas'},
      {id: 4, name: 'Shirts'},
      {id: 5, name: 'Half Sarees'},
      {id: 6, name: 'Gagras'},
      {id: 7, name: 'T-shirts'}
    ];
     this.colours = [
      {id: 1, name: 'Red'},
      {id: 2, name: 'Blue'},
      {id: 3, name: 'Green'},
      {id: 4, name: 'Yellow'},
      {id: 5, name: 'Pink'},
      {id: 6, name: 'Maroon'},
      {id: 7, name: 'Indigo'},
      {id: 8, name: 'Purple'},
      {id: 9, name: 'Orange'}
     ];
     this.materials = [
      {id: 1, name: 'Silk'},
      {id: 2, name: 'Cotton'},
      {id: 3, name: 'Linen'},
      {id: 4, name: 'Woolen'},
      {id: 5, name: 'Nylon'},
      {id: 6, name: 'Chiffon'},
      {id: 7, name: 'Leather'},
      {id: 8, name: 'Other'}
     ]; 
    this.typeselected = [];
    this.matselected= [];
    this.colourselected = [];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  constructor(private db: AngularFirestore) {
    this.filterdata = new FilterData();
    // for(let dtype of this.dresstypes){
    //   this.filterdata.Material.push(dtype.name);
    //   }
    // for(let mat of this.materials){
    // this.filterdata.Material.push(mat.name);
    // }
    // for(let col of this.colours){
    //   this.filterdata.Colour.push(col.name);
    //   }
    // this.filterdata.DressType = ['Saree','Lehengas','Kurtas','Shirts','Half Sarees','Gagras','T-shirts'];
    // this.filterdata.Material = ['Silk','Cotton','Woolen','Nylon','Linen','Chiffon','Leather','Other'];
    this.filterdata.Colour = ['Red','Blue','Green','Yellow','Orange','Indigo','Purple','Pink','Maroon'];
      console.log(this.filterdata);
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );
  
    this.designs = batchMap.pipe(map(v => Object.values(v)));
    console.log(this.designs)
    console.log("i reached this!!!") 
  }

  getBatch(offset) {
    this.debugVar = this.debugVar + 1;
    console.log(this.debugVar)
    console.log(offset);
    return this.db
      .collection('Dresses', ref => {
        let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.limit(this.batch).orderBy("cost","asc").startAfter(this.offset.value)
        // .where('colour', 'in', this.filterdata.Colour)
        // if (this.filterdata.DressType !='') { query = query.where('dresstype', '==' , this.filterdata.DressType) };
        // if (this.filterdata.Colour != []) { query = query.where('colour', 'in', this.filterdata.Colour) };
        // if (this.filterdata.Material !='') { query = query.where('material', '==', this.filterdata.Colour) };
        // if (this.filterdata.BudgetMin != 0) { query = query.where('budget', '>=', this.filterdata.BudgetMin) };
        // if (this.filterdata.BudgetMax != 99999999) { query = query.where('budget', '<=', this.filterdata.BudgetMax) };
        return query;
        }
      )
      .snapshotChanges()
      .pipe(
        tap(arr => (arr.length ? null : (this.theEnd = true,
          console.log("reached end")))),
        map(arr => {
          return arr.reduce((acc, cur) => {
            const id = cur.payload.doc.id;
            const data = cur.payload.doc.data();
            console.log(this.designs)
            console.log(cur.payload.doc.data())
            return { ...acc, [id]: data };
          }, {});
        })
      );
      console.log("i reached")
  }
  onScroll(e,offset) {
    console.log("on scroll activated")
    console.log(e);
      this.offset.next(offset);
  }
  WishList(docID){
    let Record = {};
    Record['PID'] = docID;
     this.db.collection('WishLists').add(Record);//when database is organised we can go for new doc id of WishLists set to Customer id and append the PIDs
  }
  Cart(docID){
    let Record = {};
    Record['PID'] = docID;
    this.db.collection('Carts').add(Record);//above comment corrsponds
  }
  onTypeSelectAll(items: any) {
    // for(let i=0 ; i < items.length ;i++){
    // this.filterdata.DressType.push(items[i].name);
    // }
    console.log(this.filterdata.DressType);
    console.log(items);
  }
  onColourSelectAll(items: any) {
    for(let i=0 ; i < items.length ;i++){
      this.filterdata.Colour.push(items[i].name);
      }
    console.log(items);
  }
  onMatSelectAll(items: any) {
    // for(let i=0 ; i < items.length ;i++){
    //   this.filterdata.Material.push(items[i].name);
    //   }
    console.log(items);
  }

  SetTypeFilter(event){
    this.filterdata.DressType=event.name;
    console.log(this.filterdata.DressType);
    console.log(event);
  }
  SetColourFilter(event){
    this.filterdata.Colour.push(event.name);
    console.log('in colour filter')
    console.log(this.filterdata.Colour);
  }
  SetMaterialFilter(event){
    this.filterdata.Material=event.name;
    console.log(this.filterdata.Material);
    console.log(event);
  }
  SetBugMinFilter(event){
    // this.filterdata.BudgetMin = this.bugMinSelected
  }
  SetBugMaxFilter(event){
    // this.filterdata.BudgetMax = this.bugMinSelected
  }
  SetFilter(event){
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );
    this.designs = batchMap.pipe(map(v => Object.values(v)));
  }
}
