import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    SignupComponent
  ]
})
export class LoginRoutingModule { }