import { Component, Input, OnInit } from '@angular/core';
import {Band} from '../band';
@Component({
  selector: 'app-bandcard',
  templateUrl: './bandcard.component.html',
  styleUrls: ['./bandcard.component.css']
})
export class BandcardComponent implements OnInit {
  @Input() band?:Band;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChange(): void{

  }

//will need to add backend api here so we can directly save band to the backend... 
//but how to deal with user credentials?

}
