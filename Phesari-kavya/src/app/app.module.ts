import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import{FlexLayoutModule} from '@angular/flex-layout';
import { MainComponent } from './main/main.component';
import {MatMenuModule} from '@angular/material/menu';
import { PostOrderComponent } from './post-order/post-order.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostOrderComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  MainComponent,
  PostOrderComponent]
})
export class AppModule { }
