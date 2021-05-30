import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(user: IUser) {
      console.log(user.userName, user.password);
  }
}
