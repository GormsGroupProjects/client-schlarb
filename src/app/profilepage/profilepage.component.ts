import { Component, OnInit } from '@angular/core';
import { NewsearchService } from '../newsearch.service';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

  constructor(private newsearchService: NewsearchService) { }

  ngOnInit(): void {


  }

}
