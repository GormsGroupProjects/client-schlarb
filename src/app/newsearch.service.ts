import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Band } from './band';
import { Venue } from './venue';

import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
// import { Configuration }                                     from './configuration';


@Injectable({
  providedIn: 'root'
})
export class NewsearchService {

  private urlCrud: string;
  // private urlSearch: string;
  constructor(private http: HttpClient) {
    this.urlCrud = "https://rest.bandsintown.com/artists/BillieEllish/events/?app_id=de960fdbd41b94a4ccd7234c7da4f8ae";
    
  }
  // ${artist_name}
  public getAllBands(): Observable<Band[]> { //gets bands from event
    // console.log(this.http.get<Band[]>(this.urlCrud));
    return this.http.get<Band[]>(this.urlCrud);
  }

  public getBandFromApi(query): Observable<Band> {
    console.log("api: " + query);
    return this.http.get<Band>(`https://rest.bandsintown.com/artists/${query}/?app_id=de960fdbd41b94a4ccd7234c7da4f8ae`); //replace this with the real api 
    //https://rest.bandsintown.com/artists/${query}/events/?app_id=de960fdbd41b94a4ccd7234c7da4f8a
    //https://rest.bandsintown.com/artists/Billy/events/?app_id=de960fdbd41b94a4ccd7234c7da4f8ae
  }
}





