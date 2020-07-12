import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/internal/Observable';
import { UploadDetails } from '../upload-details.model';
import { DetailsUploaderService } from '../details-uploader.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { stringify } from 'querystring';
import { DesignerPreviewData } from '../preview-data';
import { FilterData } from '../filter-data';


@Component({
  selector: 'app-upload-customer',
  templateUrl: './upload-customer.component.html',
  styleUrls: ['./upload-customer.component.css']
})
export class UploadCustomerComponent implements OnInit {
  Header = "Upload Required Model"
  fileSelected : File = null
  public imagePath;
  imgURLs: any[] = [];
  public message: string;
  Description : string = ''
  Budget : number = 0
  Colour : string = ''
  dressType : string = ''
  Age : number = 0
  
  items: Observable<any[]>;
  isHovering: boolean;

  files: File[] = [];
  downloadURL: Observable<any>;
  path : any;
  ref : any;
  
  task: AngularFireUploadTask;
  fb: Observable<any>;
  snapshot: any;
  data : Observable<any>;

  constructor(private detailsUploader : DetailsUploaderService,private storage: AngularFireStorage,private db: AngularFirestore ) {
    
  }
  ngOnInit(): void {
  }
  toggleHover(event: boolean) {
    this.isHovering = event;
  }
  
  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
      var reader = new FileReader();
      this.imagePath = files.item(i);
      reader.readAsDataURL(files.item(i)); 
      reader.onload = (_event) => { 
        this.imgURLs[i] = reader.result; 
      }
  
      console.log('File :' + i + 'Selected');
      console.log(event);
    }
  }

  OnFileSelect(event){
    // if (event.target.files.length === 0)
    //   return;
    // var imgType = event.target.files[0].type;
    // if (imgType.match('image.*') == null) {
    //   this.message = "Only images are supported.";
    //   return;
    for (let i = 0; i < event.target.files.length; i++) {
    this.files.push(event.target.files[i]);
    var reader = new FileReader();
      this.imagePath = this.files[i];
      reader.readAsDataURL(this.files[i]); 
      reader.onload = (_event) => { 
        this.imgURLs[i] = reader.result; 
      }
  
      console.log('File :' + i + 'Selected');
      console.log(event);
    }
    }
  
  OnUpload(){
    // for(let i = 0; i < this.files.length; i++){}
    //  this.path.push(`test/${Date.now()}_${this.files[0].name}`);
    //  this.ref.push(this.storage.ref(this.path[0]));
    //  const task1 = this.storage.upload(this.path[0],this.files[0]);
    //  this.task
    //   .snapshotChanges()
    //   .pipe(
    //     finalize( () => {
    //       this.downloadURL.push(this.ref[i].getDownloadURL());
    //       this.downloadURL[i].subscribe(url => {
    //         if (url) {
    //           this.fb[i] = url;
    //         }
    //         console.log(this.fb[i]);
    //       });
    //     })
    //   )
    //   .subscribe(url => {
    //     if (url) {
    //       console.log(url);
    //     }
    //   });
    // }
    let Record = {};
        Record['dresstype'] = this.dressType;
        Record['colour'] = this.Colour;
        Record['age'] = this.Age;
        Record['budget']= this.Budget;
        Record['description'] = this.Description;
        let name : string = 'Document' + this.dressType + this.Budget;
        console.log(this.Age + this.Colour + this.Budget + this.Description + this.dressType);
        this.detailsUploader.AddDetails(Record,this.dressType,name);
        // this.db.doc('CustomeruploadDetails/' + name).update( { somepath : this.Header})
          // .then(res => {
          // console.log(res);
          //   }).catch(error =>{console.log(error
          // )})
    //  for(let i = 0; i < this.files.length; i++){
   
    // task1.snapshotChanges().pipe(
    //  tap(console.log),
    //   finalize(  () =>  {
    //       this.downloadURL.push(this.ref[0].getDownloadURL());
    //       this.downloadURL[0].subscribe(url => {
    //         if (url) {
    //           this.fb = url;
    //         }
    //         console.log(this.fb);
    //       });
    //       // Record['imageURL :' + i] = this.downloadURL[i];
    //       // Record['imagePath :' + i] = this.path[i];
    //       console.log(this.downloadURL[0]);
    //       this.db.doc('CustomeruploadDetails/' + name).update( { downloadURL: this.downloadURL[0], imagePath : this.path[0] })

        //let file : File = this.fileSelected;
        // for(let i = 0; i < this.files.length; i++){

        //   }
        // for(let i = 0; i < this.files.length; i++){
        // }
        
    //   }),
    //  );
    //}
    // while(this.downloadURL.length<this.files.length){}
    const file = this.files[0];
    const filePath = `test/${Date.now()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
        )
        .subscribe(url => {
          if (url) {
            console.log(url);
          
            // this.db.doc('CustomeruploadDetails/' + name).update( { downloadURL: stringify(u), imagePath : filePath });
          }
        }); 
          // console.log(this.downloadURL);
  }

}
