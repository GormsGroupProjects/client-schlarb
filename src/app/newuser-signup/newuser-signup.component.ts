import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NewsearchService } from '../newsearch.service';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-newuser-signup',
  templateUrl: './newuser-signup.component.html',
  styleUrls: ['./newuser-signup.component.css']
})
export class NewuserSignupComponent implements OnInit {

    currentUser:User;
    userSubscription: Subscription;




  public user: User = new User();
  constructor(private userService: UserService, private service: NewsearchService) { }


  ngOnInit(): void {
    //I should set the users here
    this.userSubscription = this.userService.currentUser.subscribe(currentUser => this.currentUser = currentUser)
    //test above...


  }


  addNewUser(): void {
    // this.service.addNewUser(this.user); //works! trying something else
    this.userService.signUpNewUser(this.user); //test this...
    //this worked... then stopped working?
    console.log("newusersignup");
    console.log(this.user);
  }

  

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}

    // clickme(){
    //   console.log("Username: "+this.model.username
    //   +"First Name: "+this.model.fname);
  //   // }
  // submitted = false;

  // onSubmit() { this.submitted = true; }


