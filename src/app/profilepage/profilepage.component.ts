import { Component, OnInit } from '@angular/core';
import { NewsearchService } from '../newsearch.service';
import { User } from '../user';
import {Band} from '../band';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  public bands: Band[];
  public user:User;
  constructor(private newsearchService: NewsearchService) { }

  ngOnInit(): void {
    this.user = this.newsearchService.getUserInfo();

    //this would also display bands...if they appear
  }

}
