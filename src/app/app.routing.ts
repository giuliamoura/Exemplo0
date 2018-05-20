import { Routes, CanActivate, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AuthguardService } from './services/authguard.service';



export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthguardService] }
];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})




export class AppRoutingModule {

}