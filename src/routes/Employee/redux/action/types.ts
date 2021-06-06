import { DynamicActionTypes } from "../../../../redux/DynamicActionTypes";

type EmployeeLisTypes = typeof import("./employeeListAction");
type AddEmployeeTypes = typeof import("./addEmployeeAction");
type EmailTypes = typeof import("./emailAction");
type AddEmail = typeof import('./addEmailAction');

export type EmployeeAction = DynamicActionTypes<
EmployeeLisTypes &  AddEmployeeTypes & EmailTypes & AddEmail
>;
