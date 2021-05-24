import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontloginpageComponent } from './frontloginpage/frontloginpage.component';
import { SearchviewComponent } from './searchview/searchview.component';
import { BandcardComponent } from './bandcard/bandcard.component';
import { VenuecardComponent } from './venuecard/venuecard.component';
import {  FormsModule } from '@angular/forms'; //FormControl,
import { UserBandListComponent } from './user-band-list/user-band-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontloginpageComponent,
    SearchviewComponent,
    BandcardComponent,
    VenuecardComponent,
    UserBandListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // FormControl //not sure if this is right one, need ot learn about it!
    //reactiveFormsModule...?
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
