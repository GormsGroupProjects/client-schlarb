import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(user: User) {
      console.log(user.username, user.password);
  }
}
