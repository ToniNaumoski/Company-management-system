export class Employee {
    employeeId: number;
    userId: string;
    companyId: number;
    employeeName: string;
    employeeDepartment: string;
    employeeRoles: string;
    
    constructor(
        init: Partial<Employee>) {
        Object.assign(this, init);
    }
}