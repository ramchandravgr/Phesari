import { Component, OnInit, Input } from '@angular/core';
import { FilterData } from '../filter-data';
import { AngularFirestore } from '@angular/fire/firestore';
import { DesignerPreviewData } from '../preview-data';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.css']
})
export class ItemPreviewComponent implements OnInit {
  
  // @Input() previewdata : DesignerPreviewData;
  type : string = "Shirt" ;
  colour : string = "Grey";
  budget : number = 5000;
  age: number = 25;
  material : string ="Cotton";
  imgpath : any;
  description: string;
  imgsrc : any = null;
  
  constructor(public firestorage : AngularFireStorage) {

  }

  ngOnInit(): void {
    // this.GetImage();
    // this.type = this.previewdata.dressType;
    // this.colour = this.previewdata.colour;
    // this.budget = this.previewdata.budget;
    // this.age = this.previewdata.age;
    // this.material = this.previewdata.material;
    // this.imgpath = this.previewdata.imageUrl;
    // this.description = this.previewdata.description;
  }

  GetImage(){
    var storage = this.firestorage;
    var pathReference = storage.ref(this.imgpath);
    pathReference.getDownloadURL().subscribe(url => {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      var img = document.getElementById('myimg');
      this.imgsrc = url;
    })
  }
}
