import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontloginpageComponent } from './frontloginpage/frontloginpage.component';
import { UserBandListComponent } from './user-band-list/user-band-list.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { SearchviewComponent } from './searchview/searchview.component';
import { ApibandlistComponent } from './apibandlist/apibandlist.component';
import { NewuserSignupComponent } from './newuser-signup/newuser-signup.component';
import { LoginGuard } from './login.guard';


const routes: Routes = [
  { path: 'login', component: FrontloginpageComponent },
  { path: 'profile', component: ProfilepageComponent, canActivate: [LoginGuard] },
  { path: 'user-band-list', component: UserBandListComponent, canActivate: [LoginGuard] },
  { path: 'search', component: SearchviewComponent, canActivate: [LoginGuard] },
  { path: 'apibandlist', component: ApibandlistComponent, canActivate: [LoginGuard] },
  { path: 'newuserpage', component: NewuserSignupComponent },
  { path: '', component: FrontloginpageComponent },
  { path: '**', component: FrontloginpageComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

