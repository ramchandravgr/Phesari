import { Component, OnInit , ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { map, tap, scan, mergeMap, throttleTime, switchMap } from 'rxjs/operators';
import { FilterData } from '../filter-data';
import { FirestoreCRUDService } from '../firestore-crud.service';
import { DesignerPreviewData } from '../preview-data';
@Component({
  selector: 'app-designs-previewer',
  templateUrl: './designs-previewer.component.html',
  styleUrls: ['./designs-previewer.component.css']
})
export class DesignsPreviewerComponent implements OnInit {
  ngOnInit(): void {

  }
  scrollDistance=2;
  throttle=1000;
  batch = 30;
  theEnd = false;
  debugVar : number = 0;
  offset = new BehaviorSubject(null);
  designs: any;

  constructor(private db: AngularFirestore,private dbService : FirestoreCRUDService) {
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getDesignerData(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );
    this.designs = batchMap.pipe(map(v => Object.values(v)));
  }
  getDesignerData(offset) {
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
        tap(arr => (arr.length ? null : (this.theEnd = true,   //creating a class is much efficient? for fs data
          console.log("reached end")))),
        map(arr => {
          // return arr.reduce((acc, cur) => {
          //   const id = cur.payload.doc.id;
          //   const data = cur.payload.doc.data();
          //   console.log(id);
          //   console.log(data);
          //   return {...acc,[id]:data};
          // }, {});
             return arr.map(a => {
              const data = a.payload.doc.data() as DesignerPreviewData;
              const id = a.payload.doc.id;
              console.log(id)
              console.log(data)
              return {id, ...data};
          })
        })
      );
  }
  OnUpdate(item){
     item.edit = true;
     item.editdresstype = item.dresstype;
     item.editmaterial = item.material;
     item.editduration = item.duration;
     item.editcolour = item.colour;
     item.editcost = item.cost;
     item.editdesc = item.description; 
     console.log(item.id)
  }
  OnDelete(item_id){
    console.log(item_id)
    this.dbService.delete_details(item_id,'Dresses');
  }
  OnUpload(item){
      let Record= {}
      Record['material'] = item.editmaterial;
      Record['dresstype'] = item.editdresstype;
      Record['duration'] = item.editduration;
      Record['colour'] = item.editcolour;
      Record['cost'] = item.editcost;
      Record['description'] = item.editdesc;
      console.log(item)
      console.log(Record)
      this.dbService.update_details(item.id,Record,'Dresses');
      item.edit = false;
  }
  OnCancel(item){
    item.edit = false;
  }

  onScroll(e,offset){
    if(this.theEnd!=true){
      console.log(e);
      this.offset.next(offset);
      console.log('onScroll trigerred');
    }
  }
}
