import { Employee } from "./Employee.model";

export class Department {
    deparmentId: number | null;
    userId: number;
    companyId: number;
    departmentName: string
    constructor(
        init: Partial<Employee>) {
        Object.assign(this, init);
    }
}