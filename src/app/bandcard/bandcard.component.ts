import { Component, Input, OnInit } from '@angular/core';
import {Band} from '../band';
import { NewsearchService } from '../newsearch.service';
@Component({
  selector: 'app-bandcard',
  templateUrl: './bandcard.component.html',
  styleUrls: ['./bandcard.component.css']
})
export class BandcardComponent implements OnInit {
  @Input() band;
  constructor(private service: NewsearchService) { }//do I need this service in here?
  saveBand(): void{
    console.log("attempting to save band");
    //needs to call a service and recieve some sort of feedback...
    //let user know if band is already saved...
    //wouldnt hurt DB if the 
  }


  ngOnInit(): void {
  }
  ngOnChange(): void{

  }

//will need to add backend api here so we can directly save band to the backend... 
//but how to deal with user credentials?

}
