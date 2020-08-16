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
import {FirestoreCRUDService} from 'src/app/firestore-crud.service'
import { environment } from 'src/environments/environment';
import { DropzoneDirective } from './dropzone.directive';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { BroadcastScreenComponent } from './broadcast-screen/broadcast-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatGridListModule} from '@angular/material/grid-list';
import {CdkScrollableModule} from '@angular/cdk/scrolling';
import {DesignsPreviewerComponent} from 'C:/Users/RoGABhi/phesaritestapp/src/app/designs-previewer/designs-previewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { from } from 'rxjs';
import { DesignerUploadComponent } from './designer-upload/designer-upload.component';
import { DesignsDisplayComponent } from './designs-display/designs-display.component';
import { WishListPageComponent } from './wish-list-page/wish-list-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
// import { DesignerPreviewData } from 'src/app/preview-data';
// import { FilterData } from 'src/app/filter-data';
const material = [
  CdkScrollableModule,
  MatGridListModule,
]
@NgModule({
  declarations: [
    AppComponent,
    UploadCustomerComponent,
    DropzoneDirective,
    ItemPreviewComponent,
    BroadcastScreenComponent,
    DesignsPreviewerComponent,
    DesignerUploadComponent,
    DesignsDisplayComponent,
    WishListPageComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgbModule,
    CdkScrollableModule,
    MatGridListModule,
    BrowserAnimationsModule,
    ScrollingModule,
    InfiniteScrollModule,
    NgMultiSelectDropDownModule.forRoot(),
    // DesignerPreviewData,
    // FilterData,
  ],
  providers: [DetailsUploaderService,FirestoreCRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }