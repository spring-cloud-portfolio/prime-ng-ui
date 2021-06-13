import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './ui/page/home/home.component';
import {SignInComponent} from './ui/page/security/sign-in/sign-in.component';
import {AuthGuard} from './core/guard/auth.guard';
import {SignUpComponent} from './ui/page/security/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: 'sign-in', pathMatch: 'fool'},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
