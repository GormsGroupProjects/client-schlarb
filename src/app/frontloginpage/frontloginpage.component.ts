import { Component, Input, OnInit } from '@angular/core';

import { NewsearchService } from '../newsearch.service';
//ActivatedRoute should aid in passing items thru components...
// https://angular.io/guide/router
//paramMap most important!
import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-frontloginpage',
  templateUrl: './frontloginpage.component.html',
  styleUrls: ['./frontloginpage.component.css'],

})
export class FrontloginpageComponent implements OnInit {
  title: string ="Welcome to Schlarb Land";
  appDescription: string = "Schlarb is a music app where users can save their favorite musicians and receive updates when they are going to be performing live at one of their selected venues. Users will have their own profile where they can update their bio, like other lists, see other lists, and save their favorite artists to a list and see where they are performing.";
  // @Input() 
  user: User = new User();
  username: string;
  password: string;
  
 

  constructor(private newsearchService: NewsearchService, private userService:UserService) { }
  //need login to be more of a singleton...
  //should route be public?

  login(): void {
    this.user.username = this.username;
    this.user.password = this.password;
    console.log(this.username, this.password)
    // need to call backend with username,pw...

    //validation
    if (this.password.length >= 4 && this.username.length >=4 ){
      //need more validation
      //fix validations...
      this.userService.signInOldUser(this.user);




      // this.newsearchService.loginUser(this.user);
      //now deal with responce!!!!!

//put into local session storage

    }
    else{
      //some sort of warning

    }
    
    
  }

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.username = params['username'];
    // })

  }
}
