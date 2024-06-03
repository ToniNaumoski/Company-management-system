import { Department } from "./Department.model";

export class Company {
  companyName: string;
  companyHeadquaters: string;
  companyCeo: string;
  userId: number
  companyId: number;
  static companyCeo: any;
//  departments: Department[];
  constructor(
    init?: Partial<Company>) {
    Object.assign(this, init);
  }
}