import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontloginpageComponent} from './frontloginpage/frontloginpage.component';
import { UserBandListComponent } from './user-band-list/user-band-list.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { SearchviewComponent } from './searchview/searchview.component';
import { ApibandlistComponent} from './apibandlist/apibandlist.component';
import { NewuserSignupComponent } from './newuser-signup/newuser-signup.component';


const routes: Routes = [
  {path: 'login', component: FrontloginpageComponent}, 
{path: 'profile', component: ProfilepageComponent},
{ path:'user-band-list', component:UserBandListComponent},
{ path:'search', component: SearchviewComponent},
{ path:'apibandlist', component: ApibandlistComponent},
{ path:'newuserpage', component: NewuserSignupComponent},
{path: '', component: FrontloginpageComponent}, 
{path: '**', component: FrontloginpageComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
