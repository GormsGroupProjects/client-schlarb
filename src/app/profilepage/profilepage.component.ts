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
  public bandNames: String[] = [];
  public user:User;
  constructor(private newsearchService: NewsearchService) { }

  ngOnInit(): void {
    this.user = this.newsearchService.getUserInfo();
    for (let i=0;i<this.user.numArtists;i++){
    this.bands.push(this.user.artistList[i])
    }
    
    //this would also display bands...if they appear
  }

}
