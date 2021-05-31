import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-frontloginpage',
  templateUrl: './frontloginpage.component.html',
  styleUrls: ['./frontloginpage.component.css']
})
export class FrontloginpageComponent implements OnInit {
  title: string ="Welcome to Schlarb Land";
  appDescription: string = "Schlarb is a music app where users can save their favorite musicians and receive updates when they are going to be performing live at one of their selected venues. Users will have their own profile where they can update their bio, like other lists, see other lists, and save their favorite artists to a list and see where they are performing.";
  // @Input() 
  user?: User;
  username: string;
  password: string;


  constructor(private userService: UserService) { }

  login(): void {
    // this.user.username = this.username;
    // this.user.password = this.password;
    console.log(this.username, this.password)
    // this.userService.login(this.user);
  }

  ngOnInit(): void {}
}
