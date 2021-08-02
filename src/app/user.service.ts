import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { Band } from './band';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//new
isSignedIn:boolean = false; 

//old

  private password; //depreciate
  private username; //depreciate
  urlAddUser = "http://localhost:7000/user/";
  urlLogin = "http://localhost:7000/login";

  private userSource = new BehaviorSubject(new User);
  currentUser = this.userSource.asObservable();
  //username, password, firstName, lastName, email, numArtists, artistList:Band[]

  constructor(private http: HttpClient, public router: Router) { }

  changeUser(user: User) {
    this.userSource.next(user);
  }
  // now I need to get into 


  public signUp(user: User): void { //adds new user to DB
    // return this.http.post<Player>(this.urlCrud, player);
    // this.http.post 
    this.http.post<User>(this.urlAddUser, user).subscribe(
      res => {
        //not sure if this is correct
        this.changeUser(res);
        //need to do some sort of error handling...
      })
  }


  //old

  login(user: User) {




    // console.log(user.username, user.password);

    //onclick do this:
    //get some value and save it as username
    //get some value and save it as password
    //...this might not work in this compoenent...
    //...but we could then pas that in to app?



  }
  //save pw and username on login and signin



  //WIP HERE -- userService does not work yet...
  activeUser = new EventEmitter<User>();

  //```````````
  //service functions:
  getUserFromBackend() {
    //login?

  }
  getCurrentUser():User {
    //simply returns the current user info...
    console.log("service user: " + this.myUser.firstName)
    return this.myUser;
  }
  setNewUser() {
    //

  }

  myUser: User = new User(); //temp solution...
  addUrl = "http://localhost:7000/user/"; //replace with environmental variables
  signUpNewUser(user: User) {
    this.http.post<User>(this.addUrl, user)
      .subscribe(res => {
        //set some variable to this user
        //...subject or not?
        //need error handling
        this.myUser = res;
        
        this.isSignedIn = true; //should verify that no error...
        
        this.router.navigate(['profile']); //if above false, this will not work
      }); 
  }
  loginUrl = "http://localhost:7000/login";
  signInOldUser(user:User){
    this.http.post<User>(this.loginUrl, user)
      .subscribe(res => {
        console.log(this.myUser);
        this.myUser = res;
        this.isSignedIn = true;
        console.log("set signedIn to true")
        this.router.navigate(['profile']);
      })

  }

  isSignedInCheck():boolean{
    return this.isSignedIn;
  }
  logout(){
    this.isSignedIn = false;
    this.myUser = new User();
    this.router.navigate(['']);
  }
  addArtist(){//does not hit api right now...
  
  }
  artistUrl:string = "http://localhost:7000/user/artist/username/";
  addArtistToServer(artist:Band){ //testign this now!
    //http request sendign artist str to server
    this.http.post<User>(this.artistUrl+this.myUser.username, {name: artist.name})//artistName
      .subscribe(res => {
        console.log(res);
        // this.router.navigate(['profile']);

        //need to:
        //-add band to array or update from server
        // let newArtist = new Band();
        // newArtist.name = artistName; //only adding a name instead of an artist...
        this.myUser.artistList.push(artist)
        //notify user that list is updated ...
        //- deal with errors too...
      })
  }

  //updateUserInfo
  updateUserInfo(){
   //make a simple get request for user and replace this.myUser 
  }
}
