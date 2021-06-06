import { EmployeeList } from "../../EmployeeListResult";

export const FETCH_EMPLOYEE_INFO = "Employee/fetchEmployeeInfo";
export const EMPLOYEE_INFO_RESOLVED = "Employee/employeeListResolved";
export const EMPLOYEE_INFO_REJECTED = "Employee/employeeListRejected";
export const EMPLOYEE_INFO_RESET = "Employee/employeeListClearData";

export function fetchEmployeeActionCreator() {
  return {
    type: FETCH_EMPLOYEE_INFO
  } as const;
}
fetchEmployeeActionCreator.toString = () => FETCH_EMPLOYEE_INFO;


export function employeeListResolvedActionCreator(result: EmployeeList[]) {
  return {
    type: EMPLOYEE_INFO_RESOLVED,
    payload: result
  } as const;
}

export function employeeListRejectedActionCreator(error: boolean) {
  return {
    type: EMPLOYEE_INFO_REJECTED,
    payload: error
  } as const;
}

export function clearEmployeeListData() {
  return { type: EMPLOYEE_INFO_RESET } as const;
}
