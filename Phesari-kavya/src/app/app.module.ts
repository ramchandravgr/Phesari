import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import{FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import { PostOrderComponent } from './post-order/post-order.component';
import { NewOutlineComponent } from './new-outline/new-outline.component';
import { BottomComponent } from './bottom/bottom.component';
import { DesignerBComponent } from './designer-b/designer-b.component';
import { DesignerAComponent } from './designer-a/designer-a.component';
import { HomeAComponent } from './home-a/home-a.component';
import { HomeBComponent } from './home-b/home-b.component';
import { SellPortalComponent } from './sell-portal/sell-portal.component';
import { StartSellingComponent } from './start-selling/start-selling.component';
import { SecurityAndProtectionComponent } from './security-and-protection/security-and-protection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { SellersNavComponent } from './sellers-nav/sellers-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PostOrderComponent,
    NewOutlineComponent,
    BottomComponent,
    DesignerBComponent,
    DesignerAComponent,
    HomeAComponent,
    HomeBComponent,
    SellPortalComponent,
    StartSellingComponent,
    SecurityAndProtectionComponent,
    HowItWorksComponent,
    SellersNavComponent
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
    MatSliderModule,
    MatCardModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
