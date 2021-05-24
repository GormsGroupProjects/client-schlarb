import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontloginpageComponent} from './frontloginpage/frontloginpage.component';
import { UserBandListComponent } from './user-band-list/user-band-list.component';

const routes: Routes = [{ path:'frontloginpage', component:FrontloginpageComponent},
{ path:'user-band-list', component:UserBandListComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
