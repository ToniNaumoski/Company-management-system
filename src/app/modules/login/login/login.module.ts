import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './../../login.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { CompaniesDbConfig } from '../../../Configs/companies-db-confiq';
import { UserDbConfig } from '../../../Configs/user-db-confiq';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgxIndexedDBModule.forRoot(UserDbConfig),

  ],

})

export class LoginModule { }
