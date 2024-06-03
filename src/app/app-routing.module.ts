import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDataComponent } from './Components/company-data/company-data.component';
import { MainBodyComponent } from './Components/main-body/main-body.component';
import { CreateCompanyComponent } from './Components/create-company/create-company/create-company.component';
import {LoginComponent} from './modules/login/login/login/login.component';
import {SignupComponent} from './modules/signup/signup/signup.component'
import {authGuard} from './Guards/auth.guard'

const routes: Routes = [
 // { path: 'login', loadChildren: () => import('./modules/login/login/login.module').then(m => m.LoginModule) },
   { path: 'login',  component: LoginComponent},
   { path: 'signup',   component: SignupComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'createcompany',  canActivate: [authGuard], component: CreateCompanyComponent },
  { path: 'home',  canActivate: [authGuard], component: MainBodyComponent },
  { path: 'company-data/:companyId',  canActivate: [authGuard], component: CompanyDataComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
