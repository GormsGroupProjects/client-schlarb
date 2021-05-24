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

}
