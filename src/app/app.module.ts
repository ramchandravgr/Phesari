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
import { HomeBComponent } from './home-b/home-b.component';
import { SellPortalComponent } from './sell-portal/sell-portal.component';
import { StartSellingComponent } from './start-selling/start-selling.component';
import { SecurityAndProtectionComponent } from './security-and-protection/security-and-protection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { SellersNavComponent } from './sellers-nav/sellers-nav.component';
import { ServiceComponent } from './service/service.component';
import { AboutSellingComponent } from './about-selling/about-selling.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    PostOrderComponent,
    NewOutlineComponent,
    BottomComponent,
    DesignerBComponent,
    HomeBComponent,
    SellPortalComponent,
    StartSellingComponent,
    SecurityAndProtectionComponent,
    HowItWorksComponent,
    SellersNavComponent,
    ServiceComponent,
    AboutSellingComponent,
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
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:"home" , component:HomeBComponent},
      {path:"design" , component:DesignerBComponent},
      {path:"sell" , component:SellersNavComponent,
      children:[
        {path:'',redirectTo:'about-us',pathMatch:'full'},
        {path:"about-us" , component:AboutSellingComponent,
        children:[
            {path:'',redirectTo:'why-phesari',pathMatch:'full'},
            {path:"why-phesari" , component:SellPortalComponent},
          {path:"security-and-protection" , component:SecurityAndProtectionComponent},
          {path:"how-it-works" , component:HowItWorksComponent}
        ]},
      {path:"service" , component:ServiceComponent},
      {path:"start-to-sell" , component:StartSellingComponent},
      ]
    },
      
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
