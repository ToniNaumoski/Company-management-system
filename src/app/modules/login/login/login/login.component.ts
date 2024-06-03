import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {IndexedDbService} from './../../../../Services/Indexed-db.service'
import { Observable, catchError, of } from 'rxjs';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  invalidForm:boolean = false;
  errors:any = null;
  loading:boolean = false;
  userData:any;
  userNotValid:boolean = false;

  constructor(private fb: FormBuilder,private database:IndexedDbService, private router:Router, private dbService: NgxIndexedDBService) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.invalidForm = false; 
      this.errors = null;
      this.database.checkPerson(this.loginForm.value.email).subscribe((data:any) => {
        if(data) {
          this.userNotValid = false
          console.log('user exists')
          console.log(data)
           localStorage.setItem('userId', data.id)
           this.router.navigate(['/home']);
        } else {
          this.userNotValid = true;
          console.log('user does not exists')
        }
      })
     // console.log(this.loginForm.value)
      // this.database.addPerson(this.loginForm.value).subscribe((res) => {
      //   this.userData = res;
      // //  console.log(this.userData)
      //   localStorage.setItem('userId', this.userData.id)
      //   this.router.navigate(['/home']);

      // })
      // this.database.getAllPeople().subscribe((ok) => {
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
