import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesComponent } from './components/matches/matches.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  
  {
    path : 'tabs',
    component: TabsComponent
  },
  {
    path : 'login',
    component: LoginSignupComponent
  }

]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
