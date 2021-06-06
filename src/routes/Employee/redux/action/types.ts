import { DynamicActionTypes } from "../../../../redux/DynamicActionTypes";

type EmployeeLisTypes = typeof import("./employeeListAction");
type AddEmployeeTypes = typeof import("./addEmployeeAction");

export type EmployeeAction = DynamicActionTypes<
EmployeeLisTypes &  AddEmployeeTypes
>;
