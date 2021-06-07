import { AddEmailResult } from "../../AddEmailResult";

export const ADD_EMAIL = "Employee/addEmail";
export const ADD_EMAIL_RESOLVED = "Employee/addEmailResolved";
export const ADD_EMAIL_REJECTED = "Employee/addEmailRejected";
export const ADD_EMAIL_RESET = "Employee/addEmailClearData";

export function addEmailActionCreator(formDetail: {email: string}) {
  return {
    type: ADD_EMAIL,
    payload: formDetail
  } as const;
}
addEmailActionCreator.toString = () => ADD_EMAIL;


export function emailAddResolvedActionCreator(result: AddEmailResult) {
  return {
    type: ADD_EMAIL_RESOLVED,
    payload: result
  } as const;
}

export function emailAddRejectedActionCreator(error: boolean) {
  return {
    type: ADD_EMAIL_REJECTED,
    payload: error
  } as const;
}

export function clearEmailAddData() {
  return { type: ADD_EMAIL_RESET } as const;
}
