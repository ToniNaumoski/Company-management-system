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

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent  {
  @Input() companyId:number;
  createDepartmentForm!: FormGroup;
  invalidForm:boolean = false;
  errors:any = null;
  loading:boolean = false;
  departments = [
    'Cleaning and Maintenance',
    'Administrative',
    'Human Resources',
    'Finance',
    'Customer Service',
    'Sales',
    'Marketing',
    'Design',
    'IT and Security',
    'Data',
    'Engineering and Development',
    'Project and Product Management',
    'Operations',
    'Executive',
  ];
  department = this.departments[0];
  constructor(
    public dialogRef: MatDialogRef<AddDepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private indexedDbService:IndexedDbService
  ) {
    this.createDepartmentForm = this.fb.group({
      departmentName: new FormControl('', Validators.required),
    });
    
   }

   onSubmit() {
    if (this.createDepartmentForm.valid) {
      this.invalidForm = false; 
      this.errors = null;
      this.loading = true;
       this.createDepartmentForm.value['userId'] = Number(localStorage.getItem('userId'));
       this.createDepartmentForm.value['companyId'] = this.data.companyId;
      
      this.indexedDbService.addDepartment(this.createDepartmentForm.value).subscribe((res) => {
        this.indexedDbService.getAllDepartmentByCompaniesId(this.data.companyId)
        this.dialogRef.close();
      })
    } 
  }

  CloseDialog(): void {
    this.dialogRef.close();
  }

}
