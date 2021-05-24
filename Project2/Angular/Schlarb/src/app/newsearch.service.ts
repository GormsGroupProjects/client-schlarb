import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Band } from './band';
import { Venue } from './venue';

@Injectable({
  providedIn: 'root'
})
export class NewsearchService {
  //newsearch should get bands or venues from external api

  getBands(): Observable<Band[]> {
    const bands = of(
      [{
        id: 1,
        name: "testname",
        img: "testurl",
        album: ["doom"],
        genre: "doom metal"

      },
      {
        id: 2,
        name: "testname2",
        img: "testurl",
        album: ["doom"],
        genre: "doom metal"

      }
      ]
    );
    return bands;
    //this will need to be replaces with real api data
  }
  getVenues(): Observable <Venue[]> {
    const venues = of(
      [{
        name: "testname",
        date: null
      },
      {
        name: "testname2",
        date: null
      }
      ]
    );
    return venues;
  }

  constructor() { }
}

