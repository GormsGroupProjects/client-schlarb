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
<<<<<<< HEAD
export class SearchviewComponent  {
  bands:Band[] = [];
  venues:Venue[] = [];
  query:string = "";
=======
export class SearchviewComponent {
  band: Band;
  venues: Venue[] = [];
  query: string = "";
>>>>>>> 6e584660f980bbeaab742ae34e984c15585eae89
  selectedOption = new FormControl('');

  searchAPI() {  //this is run on click of search button
    //need to learn advanced (reactive?) forms before can implement properly
<<<<<<< HEAD
    console.log("search Query: "+this.query);
    console.log("selected Option: : "+this.selectedOption.value);

  //     if (this.selectedOption.value=="band"){
  //       console.log("getting bands");
  //       this.getBands(); //there can be only 1 highlander (delete me)
  //       this.getBandsFromApi();
  //     }
  //     else if (this.selectedOption.value == "venue"){
  //       console.log("getting bands");
  //     }
  //     else{
  //       console.log("genre, data and error not implemented")
  //     }
  // }


// getBandsFromApi(){
//   console.log(this.searchService.getBandsFromApi(this.query));
// }
//   getBands():void{
//     this.searchService.getBands()
//       .subscribe(bands => this.bands = bands);
//   }
//do for venues!!
=======
    console.log("search Query: " + this.query);
    console.log("selected Option: : " + this.selectedOption.value);

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


>>>>>>> 6e584660f980bbeaab742ae34e984c15585eae89

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
<<<<<<< HEAD
  // constructor(private searchService: NewsearchService ) { }
=======
  constructor(private searchService: NewsearchService) { }
>>>>>>> 6e584660f980bbeaab742ae34e984c15585eae89

  // ngOnInit(): void {

  // }



}
}