import { DBConfig } from "ngx-indexed-db";

/**
 * @description Initialize the DBConfig
 * @param CompaniesDbConfig
 * @returns Sets the ObjectStoreData
 */
export const UserDbConfig: DBConfig = {

    name: 'MainDb',
    version: 1,
    objectStoresMeta: [
        {
            store: 'User',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
            { name: 'email', keypath: 'email', options: { unique: false } },
            { name: 'password', keypath: 'password', options: { unique: false } }
           
            ],
        },
        {
            store: 'Company',
            storeConfig: { keyPath: 'companyId', autoIncrement: true },
            storeSchema: [
                {
                    name: 'companyId',
                    keypath: 'companyId',
                    options: { unique: true },
                },
                { name: 'userId', keypath: 'userId', options: { unique: false } },
                { name: 'companyHeadquarters', keypath: 'companyHeadquarters', options: { unique: false } },
                { name: 'companyCeo', keypath: 'companyCeo', options: { unique: false } }

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
                { name: 'userId', keypath: 'userId', options: { unique: false } },
                { name: 'companyId', keypath: 'companyId', options: { unique: false } },
                { name: 'departmentName', keypath: 'departmentName', options: { unique: false } }

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
                { name: 'userId', keypath: 'userId', options: { unique: false } },
                { name: 'companyId', keypath: 'companyId', options: { unique: false } },
                { name: 'departmentName', keypath: 'departmentName', options: { unique: false } },
                { name: 'employeeRole', keypath: 'employeeRole', options: { unique: false } }
            ],
        },
    ],
}

