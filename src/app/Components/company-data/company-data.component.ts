import { Component, OnInit, SimpleChanges  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompaniesService } from '../../Services/Comapnies.service';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ActivatedRoute } from '@angular/router';
import {IndexedDbService} from './../../Services/Indexed-db.service';
import { Company } from '../../Models/Company.model';
import { Employee } from '../../Models/Employee.model';
import { Department } from '../../Models/Department.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrl: './company-data.component.css'
})
export class CompanyDataComponent implements OnInit {
  searchForm: FormGroup;
  company:Company;
  employess:Employee[];
  employessCopy:Employee[];
  name: string = 'name';
  department:Department[];
  filterByDepartments:Array<string> =[];
  filterByEmployess:Array<string> =[];
  constructor(public dialog: MatDialog, private route: ActivatedRoute,
   private indexedDbService:IndexedDbService, private fb: FormBuilder
  ) {
    this.indexedDbService.progress$.subscribe((res) => {
      this.employess = res;
      this.employessCopy = res;
     if(this.employess) {
      this.createFilterByDepartments(this.employess)
     }
        
      
    })
    this.indexedDbService.progressDepartment$.subscribe((res) => {
      this.department = res;
     
    })
   }

  ngOnInit() {
   
      this.indexedDbService.getCompanyByCompanyId(Number(this.route.snapshot.paramMap.get('companyId'))).subscribe((res) => {
        this.company = Object(res);
      })
      this.indexedDbService.getAllEmployeesByCompaniesId(Number(this.route.snapshot.paramMap.get('companyId')))
      this.indexedDbService.getAllDepartmentByCompaniesId(Number(this.route.snapshot.paramMap.get('companyId')))
     
  }


  createFilterByDepartments(emlpoyee:Employee[]) {
    this.filterByDepartments = [];
    this.filterByEmployess = [];
    this.employess.forEach((e) => {
      if (this.filterByDepartments.indexOf(e.employeeDepartment) === -1) { 
        this.filterByDepartments.push(e.employeeDepartment)
      }
    
      this.filterByEmployess.push(e.employeeName)
      console.log(e.employeeDepartment)
    })
  }

  OpenAddDepartmentDialog(): void {
    const dialogRef = this.dialog.open(AddDepartmentComponent, {
      data: { companyId: Number(this.route.snapshot.paramMap.get('companyId')) },
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  OpenAddEmployeeDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      data: { companyId: Number(this.route.snapshot.paramMap.get('companyId')) },
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  OpenEditAddEployeeDialog(employee:any): void {
    console.log(employee)
    employee['companyId']= Number(this.route.snapshot.paramMap.get('companyId'))
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      data: { employee: employee, edit:true },
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  deleteEmployee(emlpoyeeId:number, companyId: number) {
    
    this.indexedDbService.deleteEmployee(emlpoyeeId, companyId)
  }

  onDepartmentChange(event: Event): void {
    
    const selectedDepartment = (event.target as HTMLSelectElement).value;
    if(selectedDepartment) {
      const employeeFilter = this.employessCopy.filter(employe => employe.employeeDepartment === selectedDepartment);
      this.employess = employeeFilter;
    } else {
      this.employess = this.employessCopy
    }
    
  }

  onEmployessChange(event: Event): void {
    const selectedemployeeName = (event.target as HTMLSelectElement).value;
    if(selectedemployeeName) {
      const employeeFilter = this.employessCopy.filter(employe => employe.employeeName === selectedemployeeName);
      this.employess = employeeFilter;
    } else {
      this.employess = this.employessCopy
    }
  }

  // onInputChange(searchText: string): void {
  //   this.employess = this.employessCopy.filter(item => 
  //   item.employeeName.toLowerCase().includes(searchText))
  // }
}
