import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Band } from '../band';
import { NewsearchService } from '../newsearch.service';

@Component({
  selector: 'app-apibandlist',
  templateUrl: './apibandlist.component.html',
  styleUrls: ['./apibandlist.component.css']
})
export class ApibandlistComponent implements OnInit {

  public bands: Band[];
  constructor(private service: NewsearchService) { }

  ngOnInit(): void {
    this.service.getAllBands().subscribe(res => {
      this.bands = res;
    })
  }

}



