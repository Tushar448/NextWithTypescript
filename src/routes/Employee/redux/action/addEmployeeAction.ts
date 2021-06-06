import { AddEmployeeResult } from "../../AddEmployeeResult";

export const ADD_EMPLOYEE = "Employee/addEmployee";
export const EMPLOYEE_ADD_RESOLVED = "Employee/addEmployeeResolved";
export const EMPLOYEE_ADD_REJECTED = "Employee/addEmployeenRejected";
export const EMPLOYEE_ADD_RESET = "Employee/addEmployeeClearData";

export function addEmployeeActionCreator(param: any) {
  return {
    type: ADD_EMPLOYEE,
    payload: param
  } as const;
}
addEmployeeActionCreator.toString = () => ADD_EMPLOYEE;


export function employeeAddResolvedActionCreator(result: AddEmployeeResult) {
  return {
    type: EMPLOYEE_ADD_RESOLVED,
    payload: result
  } as const;
}

export function employeeAddRejectedActionCreator(error: boolean) {
  return {
    type: EMPLOYEE_ADD_REJECTED,
    payload: error
  } as const;
}

export function clearEmployeeAddData() {
  return { type: EMPLOYEE_ADD_RESET } as const;
}
