import { Component, Input, OnInit } from '@angular/core';
import {Band} from '../band';
import { NewsearchService } from '../newsearch.service';
@Component({
  selector: 'app-bandcard',
  templateUrl: './bandcard.component.html',
  styleUrls: ['./bandcard.component.css']
})
export class BandcardComponent implements OnInit {
  @Input() bands:Band[];
  constructor(private service: NewsearchService) { }

  ngOnInit(): void {
    this.service.getAllBands().subscribe(res => {
      this.bands = res;
    })
  }//added this to band card and it also exists in serchview....here it allows bandcard to work

}
