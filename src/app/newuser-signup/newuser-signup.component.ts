import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NewsearchService } from '../newsearch.service';

@Component({
  selector: 'app-newuser-signup',
  templateUrl: './newuser-signup.component.html',
  styleUrls: ['./newuser-signup.component.css']
})
export class NewuserSignupComponent implements OnInit {


  public user: User = new User();
  constructor(private service: NewsearchService) {
    // this.user = new User();
  }


  ngOnInit(): void {
  }

  addNewUser(): void {
    this.service.addNewUser(this.user);
    // .subscribe(res => {
    // this.user = new User();
  }
  // )

  // }
}

    // clickme(){
    //   console.log("Username: "+this.model.username
    //   +"First Name: "+this.model.fname);
  //   // }
  // submitted = false;

  // onSubmit() { this.submitted = true; }


