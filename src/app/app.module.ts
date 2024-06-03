import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyCardComponent } from './Components/company-card/company-card.component';
import { CompanyDataComponent } from './Components/company-data/company-data.component';
import { MainBodyComponent } from './Components/main-body/main-body.component';
import { CompaniesDbConfig } from './Configs/companies-db-confiq';
import { UserDbConfig } from './Configs/user-db-confiq';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {LoginComponent} from './modules/login/login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDepartmentComponent } from './Components/company-data/add-department/add-department.component';
import { CreateCompanyComponent } from './Components/create-company/create-company/create-company.component';
import { AddEmployeeComponent } from './Components/company-data/add-employee/add-employee.component';
import {SignupComponent} from './modules/signup/signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    CompanyCardComponent,
    CompanyDataComponent,
    MainBodyComponent,
    AddDepartmentComponent,
    CreateCompanyComponent,
    AddEmployeeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(UserDbConfig),
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
