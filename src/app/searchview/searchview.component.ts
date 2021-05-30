import { Component, OnInit } from '@angular/core';
import { Band } from '../band';
import { Venue } from '../venue';
import { NewsearchService } from '../newsearch.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-searchview',
  templateUrl: './searchview.component.html',
  styleUrls: ['./searchview.component.css']
})
export class SearchviewComponent {
  band: Band;
  venues: Venue[] = [];
  query: string = "";
  selectedOption = new FormControl('');

  searchAPI() {  //this is run on click of search button
    //need to learn advanced (reactive?) forms before can implement properly
    console.log("search Query: " + this.query);
    console.log("selected Option: : " + this.selectedOption.value);
    //validation
    // if (this.query.length)
    if (this.selectedOption.value == "band") {
      console.log("getting band");
      this.getBandFromApi();
    }
    else if (this.selectedOption.value == "venue") {
      // console.log("getting bands");
      // this.searchService.getAllBands().subscribe(res => {
      //   this.band = res;
      // })
    }
    else {
      console.log("genre, data and error not implemented")
    }
  }



  // getBands():void{
  //   this.searchService.getBands()
  //     .subscribe(bands => this.bands = bands);
  // }
  //do for venues!!
  getBandFromApi(): void {
    this.searchService.getBandFromApi(this.query) //pass in query to api
      .subscribe(res => {
        this.band = res
        console.log(res);
      });

    console.log("got band from api");
  }

  //reconfig with a service
  constructor(private searchService: NewsearchService) { }

  ngOnInit(): void {

  }



}
