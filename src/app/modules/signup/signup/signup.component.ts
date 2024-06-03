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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent   {
loginForm!: FormGroup;
invalidForm:boolean = false;
errors:any = null;
loading:boolean = false;
userData:any;
userExists:boolean = false;

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
    this.database.checkPerson(this.loginForm.value.email).subscribe((data) => {
   
      if(data) {
        this.userExists = true
        console.log('user exists')
      } else {
        this.userExists = false;
        console.log('user does not exists')
        this.database.addPerson(this.loginForm.value).subscribe((res) => {
         console.log(res)
          // localStorage.setItem('userId', this.userData.id)
          alert('new user is created')
           this.router.navigate(['/login']);
  
        })

      }
    })
   // console.log(this.loginForm.value)
    // this.database.addPerson(this.loginForm.value).subscribe((res) => {
    //   this.userData = res;
    // //  console.log(this.userData)
    //   localStorage.setItem('userId', this.userData.id)
    //   this.router.navigate(['/home']);

    // })

  } 
}

}
