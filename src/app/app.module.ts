import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageModule } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadCustomerComponent } from './upload-customer/upload-customer.component';
import { DetailsUploaderService } from 'src/app/details-uploader.service';
import { environment } from 'src/environments/environment';
import { DropzoneDirective } from './dropzone.directive';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { BroadcastScreenComponent } from './broadcast-screen/broadcast-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DesignerPreviewData } from 'src/app/preview-data';
// import { FilterData } from 'src/app/filter-data';
@NgModule({
  declarations: [
    AppComponent,
    UploadCustomerComponent,
    DropzoneDirective,
    ItemPreviewComponent,
    BroadcastScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgbModule,
    // DesignerPreviewData,
    // FilterData,
  ],
  providers: [DetailsUploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }