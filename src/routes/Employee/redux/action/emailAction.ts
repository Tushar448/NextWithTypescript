import { EmailResult } from "../../EmailResult";

export const FETCH_EMAIL_INFO = "Employee/fetchEmployeeIEmail";
export const EMPLOYEE_EMAIL_RESOLVED = "Employee/employeeEmailResolved";
export const EMPLOYEE_EMAIL_REJECTED = "Employee/employeeEmailRejected";
export const EMPLOYEE_EMAIL_RESET = "Employee/employeeEmailClearData";

export function fetchEmailActionCreator() {
  return {
    type: FETCH_EMAIL_INFO
  } as const;
}
fetchEmailActionCreator.toString = () => FETCH_EMAIL_INFO;


export function emailResolvedActionCreator(result: EmailResult[]) {
  return {
    type: EMPLOYEE_EMAIL_RESOLVED,
    payload: result
  } as const;
}

export function emailListRejectedActionCreator(error: boolean) {
  return {
    type: EMPLOYEE_EMAIL_REJECTED,
    payload: error
  } as const;
}

export function clearEmailData() {
  return { type: EMPLOYEE_EMAIL_RESET } as const;
}
