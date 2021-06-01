import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private password;
  private username;
  constructor() { }

  login(user: User) {

      // console.log(user.username, user.password);

      //onclick do this:
      //get some value and save it as username
      //get some value and save it as password
      //...this might not work in this compoenent...
      //...but we could then pas that in to app?

  }


  //save pw and username on login and signin



}
