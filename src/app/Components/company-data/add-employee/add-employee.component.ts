import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
import { ActivatedRoute } from '@angular/router';
import {Department} from './../../../Models/Department.model'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit  {
  createEmployeeForm!: FormGroup;
  invalidForm:boolean = false;
  errors:any = null;
  loading:boolean = false;
   roles = [
    'Cleaning Staff',
    'Janitor',
    'Maintenance Technician',
    'Facilities Manager',
    'Executive Assistant',
    'Administrative Assistant',
    'Office Manager',
    'Recruiter',
    'HR Manager',
    'Financial Analyst',
    'Accountant',
    'Customer Service Representative',
    'Customer Success Manager',
    'Sales Representative',
    'Marketing Specialist',
    'Content Writer',
    'Graphic Designer',
    'UI Designer',
    'UX Designer',
    'Ethical Hacker',
    'Security Engineer',
    'Cybersecurity Analyst',
    'Systems Administrator',
    'Network Administrator',
    'IT Support Specialist',
    'Data Analyst',
    'Data Engineer',
    'Data Scientist',
    'Systems Engineer',
    'Quality Assurance (QA) Engineer',
    'DevOps Engineer',
    'Full-Stack Developer',
    'Back-End Developer',
    'Front-End Developer',
    'Software Developer',
    'Scrum Master',
    'Project Manager',
    'Product Manager',
    'Director of Marketing',
    'Director of Sales',
    'Director of Product Management',
    'Director of Engineering',
    'VP of Finance',
    'VP of Operations',
    'VP of Marketing',
    'VP of Sales',
    'CHRO (Chief Human Resources Officer)',
    'CMO (Chief Marketing Officer)',
    'CIO (Chief Information Officer)',
    'CTO (Chief Technology Officer)',
    'CFO (Chief Financial Officer)',
    'COO (Chief Operating Officer)',
    'CEO (Chief Executive Officer)'
  ];
  role = this.roles[0];
  departments:Department[];
  department:string;
  constructor(
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private indexedDbService:IndexedDbService
  ) {
    this.indexedDbService.progressDepartment$.subscribe((res) => {
      this.departments = res;
      console.log(this.departments)
    })
    this.createEmployeeForm = this.fb.group({
      employeeName: new FormControl('', [Validators.required, Validators.minLength(8)]),
      employeeRoles: new FormControl('', Validators.required),
      employeeDepartment: new FormControl(''),
    });
   }

   ngOnInit() {
    if(this.data.hasOwnProperty('edit')) {
    this.createEmployeeForm.patchValue({
      employeeName: this.data.employee.employeeName,
      employeeRoles: this.data.employee.employeeRoles,
      employeeDepartment: this.data.employee.employeeDepartment,
    });
    }
    // this.createEmployeeForm.patchValue({
    //   employeeRoles:  'Cleaning Staff',
    //   employeeDepartment: 'Data'
    // });
   }

   onSubmit() {
    if (this.createEmployeeForm.valid) {
      this.invalidForm = false; 
      this.errors = null;
      this.loading = true;
       this.createEmployeeForm.value['userId'] = Number(localStorage.getItem('userId'));
       if(this.data.hasOwnProperty('edit')) {
        this.createEmployeeForm.value['companyId'] = this.data.employee.companyId;
        this.createEmployeeForm.value['employeeId'] = this.data.employee.employeeId;
        this.indexedDbService.editEmployee(this.createEmployeeForm.value)
        this.dialogRef.close();
       } else {
        this.createEmployeeForm.value['companyId'] = this.data.companyId;
        console.log(this.createEmployeeForm.value)
        this.indexedDbService.addEmployee(this.createEmployeeForm.value).subscribe((res) => {
          this.indexedDbService.getAllEmployeesByCompaniesId(this.data.companyId)
          this.dialogRef.close();
          })
       }
       

    
      // this.database.addCompany(this.createCompanyForm.value).subscribe((res:any) => {
      //   this.userData = res;
      //  // console.log(this.userData)
      //   // localStorage.setItem('userId', this.userData.id)
      //    this.router.navigate(['/home/']);

      // })
      // this.database.getAllCompanies().subscribe((ok) => {
      //  // console.log(ok)
     
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
  CloseDialog(): void {
    this.dialogRef.close();
  }

}
