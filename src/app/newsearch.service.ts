import { Injectable } from '@angular/core';
import { Observable, of, throwError  } from 'rxjs';
import { Band } from './band';
import { Venue } from './venue';
import { User } from './user'

import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class NewsearchService {

  private urlCrud: string;
   private urlAdd: string;
  constructor(private http: HttpClient) {
    this.urlCrud = "https://rest.bandsintown.com/artists/BillieEllish/events/?app_id=de960fdbd41b94a4ccd7234c7da4f8ae";
    this.urlAdd = "http://localhost:7000/user/"
  }
  // ${artist_name}
  



  public getAllBands(): Observable<Band[]> {
    console.log(this.urlCrud) //trying something
    return this.http.get<Band[]>(this.urlCrud);
    
  }

  getBandsFromApi(): Observable<Band[]> {
    // console.log("api: " + );
    return this.http.get<Band[]>(this.urlCrud); 
    //replace this with the real api 
  }

  //used to add new user to database
  public addNewUser(user:User): Observable<User> {
    return this.http.post<User>(this.urlAdd, user);

  }
}