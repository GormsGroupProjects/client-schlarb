import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule } from '@angular/forms'; //FormControl,
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontloginpageComponent } from './frontloginpage/frontloginpage.component';
import { SearchviewComponent } from './searchview/searchview.component';
import { BandcardComponent } from './bandcard/bandcard.component';
import { VenuecardComponent } from './venuecard/venuecard.component';
import { UserBandListComponent } from './user-band-list/user-band-list.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsearchService } from './newsearch.service';
import { ApibandlistComponent } from './apibandlist/apibandlist.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontloginpageComponent,
    SearchviewComponent,
    BandcardComponent,
    VenuecardComponent,
    UserBandListComponent,
    ProfilepageComponent,
    NavbarComponent,
    ApibandlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // FormControl //not sure if this is right one, need ot learn about it!
    //reactiveFormsModule...?
  ],
  providers: [NewsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
