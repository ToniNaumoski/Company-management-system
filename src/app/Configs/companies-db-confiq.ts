import { DBConfig } from "ngx-indexed-db";

/**
 * @description Initialize the DBConfig
 * @param CompaniesDbConfig
 * @returns Sets the ObjectStoreData
 */
export const CompaniesDbConfig: DBConfig = {

    name: 'CompaniesDb',
    version: 1,
    objectStoresMeta: [
        {
            store: 'Company',
            storeConfig: { keyPath: 'companyId', autoIncrement: true },
            storeSchema: [
                {
                    name: 'companyId',
                    keypath: 'companyId',
                    options: { unique: true },
                },
            ],
        },
        {
            store: 'Department',
            storeConfig: { keyPath: 'departmentId', autoIncrement: true },
            storeSchema: [
                {
                    name: 'departmentId',
                    keypath: 'departmentId',
                    options: { unique: true },
                },
            ],
        },
        {
            store: 'Employee',
            storeConfig: { keyPath: 'employeeId', autoIncrement: true },
            storeSchema: [
                {
                    name: 'employeeId',
                    keypath: 'employeeId',
                    options: { unique: true },
                },
            ],
        },
    ],
}