import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {IndexedDbService} from './../../../Services/Indexed-db.service'
import { Observable, catchError, of } from 'rxjs';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.css'
})
export class CreateCompanyComponent {
  createCompanyForm!: FormGroup;
  invalidForm:boolean = false;
  errors:any = null;
  loading:boolean = false;
  userData:any;

  constructor(private fb: FormBuilder,private database:IndexedDbService, private router:Router, private dbService: NgxIndexedDBService) {
    this.createCompanyForm = this.fb.group({
      companyName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      companyHeadquaters: new FormControl('', [Validators.required, Validators.minLength(4)]),
      companyCeo: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  onSubmit() {
    if (this.createCompanyForm.valid) {
      this.invalidForm = false; 
      this.errors = null;
    
      this.createCompanyForm.value['userId'] = Number(localStorage.getItem('userId'));
    
      this.database.addCompany(this.createCompanyForm.value).subscribe((res:any) => {
        this.userData = res;
       // console.log(this.userData)
        // localStorage.setItem('userId', this.userData.id)
         this.router.navigate(['/home']);

      })
      // this.database.getAllCompanies().subscribe((ok) => {
      //   console.log(ok)
     
      // })
        //   console.log('ok');
        // });
      // this.dbService
      // .addPerson('user', {
      //   email: `bruce@wayne.com`,
      //   password: `1234`,
      // })
      // .subscribe(() => {
      //   console.log('ok');
      // });
      // this.authService.onLogin({"username": "zack", "password": "Pass1234!"})
      // .pipe(
      //   catchError((error) => {
      //      return of(error)
      //   })
      // )
      // .subscribe((data) => {
      //   this.tokenService.setToken(data.token)
      // console.log(data.token)

      // });
    } 
  }
}
