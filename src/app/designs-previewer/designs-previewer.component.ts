import { Component, OnInit , ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { map, tap, scan, mergeMap, throttleTime, switchMap } from 'rxjs/operators';
import { FilterData } from '../filter-data';
import { FirestoreCRUDService } from '../firestore-crud.service';
@Component({
  selector: 'app-designs-previewer',
  templateUrl: './designs-previewer.component.html',
  styleUrls: ['./designs-previewer.component.css']
})
export class DesignsPreviewerComponent implements OnInit {

  // constructor() { }
  ngOnInit(): void {

  }
  // Description : string = ''
  // Cost : number = 0
  // Colour : string = ''
  // dressType : string = ''
  // Duration : number = 0
  // Material : string = ''
  scrollDistance=2;
  throttle=1000;
  batch = 20;
  theEnd = false;
  debugVar : number = 0;
  datafilter : BehaviorSubject<FilterData>;
  offset = new BehaviorSubject(0);
  designs: any;

  constructor(private db: AngularFirestore,private dbService : FirestoreCRUDService) {
    // uploader.Colour=this.Colour;
    // uploader.Cost=this.Cost;
    // uploader.Description=this.Description;
    // uploader.Duration=this.Duration;
    // uploader.Material=this.Material;
    // uploader.dressType=this.dressType;
    this.datafilter = new BehaviorSubject (new FilterData())
    const batchMap = this.datafilter.pipe(
      throttleTime(500),
      switchMap(n => this.getFilteredData(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );
    // const scrollMap = this.offset.pipe(
    //   throttleTime(500),
    //   mergeMap(n => this.getExtraData(n)),
    //   scan((acc, batch) => {
    //     return { ...acc, ...batch };
    //   }, {})
    // );
    this.designs = batchMap.pipe(map(v => Object.values(v)));
  }
  getFilteredData(datafilter) {
    console.log(datafilter);
    return this.db
      .collection('Dresses', ref => {
            let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
            query = query.limit(this.batch).orderBy("cost","asc").startAfter(this.offset.value)
            // if (this.datafilter.value.DressType != null) { query = query.where('dresstype', '==', this.datafilter.value.DressType) };
            // if (this.datafilter.value.Colour != null) { query = query.where('colour', '==', this.datafilter.value.Colour) };
            // if (this.datafilter.value.Material != null) { query = query.where('material', '==', this.datafilter.value.Colour) };
            // if (this.datafilter.value.BudgetMin != 0) { query = query.where('budget', '>=', this.datafilter.value.BudgetMin) };
            // if (this.datafilter.value.BudgetMax != 99999999) { query = query.where('budget', '<=', this.datafilter.value.BudgetMax) };
            return query;
          })
      .snapshotChanges()
      .pipe(
        tap(arr => (arr.length ? null : (this.theEnd = true,
          console.log("reached end")))),
        map(arr => {
          return arr.reduce((acc, cur) => {
            const id = cur.payload.doc.id;
            const data = cur.payload.doc.data();
            console.log(cur.payload.doc.data())
            return { ...acc, [id]: data };
          }, {});
        })
      );
  }
  OnUpdate(item){
     item.edit = true;
     item.editdressType = item.dresstype;
     item.editmaterial = item.material;
     item.editduration = item.duration;
     item.editcolour = item.colour;
     item.editcost = item.cost;
     item.editdesc = item.description; 
  }
  OnDelete(item){
    this.dbService.delete_details(item.id,'Dresses');
  }
  OnUpload(item){
      let Record= {}
      Record['dresstype'] = item.editdresstype;
      Record['material'] = item.editmaterial;
      Record['duration'] = item.editduration;
      Record['colour'] = item.editcolour;
      Record['cost'] = item.editcost;
      Record['description'] = item.editdesc;
      this.dbService.update_details(item.id,Record,'Dresses');
      item.edit = false;
  }
  OnCancel(item){
    item.edit = false;
  }

  onScroll(e,offset){
      console.log(e);
      this.offset.next(offset);
      console.log('onScroll trigerred')
      let extradata = this.db.collection('Dresses', ref => {
      let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query.limit(this.batch).orderBy("cost","asc").startAfter(this.offset.value)
      // if (this.datafilter.value.DressType != null) { query = query.where('dresstype', 'in', this.datafilter.value.DressType) };
      // if (this.datafilter.value.Colour != null) { query = query.where('colour', 'in', this.datafilter.value.Colour) };
      // if (this.datafilter.value.Material != null) { query = query.where('material', 'in', this.datafilter.value.Colour) };
      // if (this.datafilter.value.BudgetMin != 0) { query = query.where('budget', '>=', this.datafilter.value.BudgetMin) };
      // if (this.datafilter.value.BudgetMax != 99999999) { query = query.where('budget', '<=', this.datafilter.value.BudgetMax) };
      return query;
      }).snapshotChanges().pipe(
        tap(arr => (arr.length ? null : (this.theEnd = true,
          console.log("reached end")))),
        map(arr => {
          return arr.reduce((acc, cur) => {
            const id = cur.payload.doc.id;
            const data = cur.payload.doc.data();
            console.log(cur.payload.doc.data())
            return { ...acc, [id]: data };
          }, {});
        })
      );
      this.designs = this.designs.concat(extradata);
  }
}
