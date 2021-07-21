import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private userService:UserService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.userService.isSignedInCheck();
    console.log("route gaurd");
    // return true;
    let canPass = this.userService.isSignedInCheck();
    console.log(canPass);
    if (canPass == false){
      //reroute
      alert("permission denied");
      this.router.navigate(['']);
      //maybe alert
      
    }
    return canPass;
  }
  
}
