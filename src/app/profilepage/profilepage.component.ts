import { Component, OnInit } from '@angular/core';
import { NewsearchService } from '../newsearch.service';
import { User } from '../user';
import { Band } from '../band';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  public bands: Band[];
  public bandNames: String[] = [];
  public user: User;
  selectedArtist?:Band;

  constructor(private newsearchService: NewsearchService, private userService: UserService) { }

  ngOnInit(): void {
    // this.user = this.newsearchService.getUserInfo();
    // for (let i=0;i<this.user.numArtists;i++){
    // this.bands.push(this.user.artistList[i])
    //above sort of works, testing below

    this.user = this.userService.getCurrentUser();
    console.log("initialized user: "+ this.user.firstName)
  }

  //this would also display bands...if they appear

  displayArtist(art:Band){
    //this should search artist and input that info into the app-bandcard
    
    //first lets test bandcard...
    this.selectedArtist = art;// this displays artist name in the bandcard
    //need to get artist info from api...
    //...so convert an observable into a band...
    this.newsearchService.getBandFromApi(art)
    .subscribe(res=>{ //should return Observable<Band>... need to get a band out of it
      this.selectedArtist = res;
    })
  }
}


