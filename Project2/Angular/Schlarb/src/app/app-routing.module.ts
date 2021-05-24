import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontloginpageComponent } from './frontloginpage/frontloginpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';

const routes: Routes = [{path: 'login', component: FrontloginpageComponent}, 
{path: 'profile', component: ProfilepageComponent},
{path: '**', component: FrontloginpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
