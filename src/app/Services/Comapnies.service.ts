import { Injectable } from "@angular/core";
import { Company } from "../Models/Company.model";

@Injectable({ providedIn: 'root' })
export class CompaniesService {
    static mainFileCompany: Company;
}

//     Companies: Company[] =
//         [{
//             companyId: 1,
//             "companyName": "XYZ Corporation",
//             "headquarters": "1234 Business Ave, Metropolis, XY",
//             "ceo": "Jane Austin",
//             "departments": [
//                 {
//                     deparmentId: 1,
//                     "departmentName": "IT",
//                     "head": "Sarah Connor",
//                     "employees": [
//                         {
//                             "employeeId": "E001",
//                             "name": "John Doe"
//                         },
//                         {
//                             "employeeId": "E004",
//                             "name": "Michael Reyes"
//                         }
//                     ]
//                 },
//                 {
//                     deparmentId: 2,
//                     "departmentName": "Marketing",
//                     "head": "Robert Frost",
//                     "employees": [
//                         {
//                             "employeeId": "E002",
//                             "name": "Jane Smith"
//                         }
//                     ]
//                 },
//                 {
//                     deparmentId: 3,
//                     "departmentName": "Human Resources",
//                     "head": "Emma Brown",
//                     "employees": [
//                         {
//                             "employeeId": "E003",
//                             "name": "Alice Johnson"
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             companyId: 2,
//             "companyName": "ABC Inc.",
//             "headquarters": "5678 Main St, Smalltown, AB",
//             "ceo": "David Johnson",
//             "departments": [
//                 {
//                     deparmentId: 1,
//                     "departmentName": "Finance",
//                     "head": "Susan Williams",
//                     "employees": [
//                         {
//                             "employeeId": "E005",
//                             "name": "Robert Davis"
//                         },
//                         {
//                             "employeeId": "E006",
//                             "name": "Emily Turner"
//                         }
//                     ]
//                 },
//                 {
//                     deparmentId: 2,
//                     "departmentName": "Sales",
//                     "head": "James Smith",
//                     "employees": [
//                         {
//                             "employeeId": "E007",
//                             "name": "Linda Brown"
//                         },
//                         {
//                             "employeeId": "E008",
//                             "name": "William Lee"
//                         }
//                     ]
//                 }
//             ]
//         }];

//     public GetAllComplanies(): Company[] {
//         return this.Companies;
//     }
// }
