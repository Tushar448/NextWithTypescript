import { Reducer } from "redux";

import { EmailState } from "../EmployeeState";
import { EmployeeAction } from "../action/types";
import {
    EMPLOYEE_EMAIL_RESOLVED,
    EMPLOYEE_EMAIL_REJECTED,
    EMPLOYEE_EMAIL_RESET
} from "../action/emailAction";

const defaultEmailListState: EmailState = {
    isEmailError: false
};

export const emailReducer: Reducer<EmailState, EmployeeAction> = (
  emailListState = defaultEmailListState,
  action
) => {
  switch (action.type) {
    case EMPLOYEE_EMAIL_RESOLVED:
      return { emaildata: action.payload, isEmailError: false };
    case EMPLOYEE_EMAIL_REJECTED:
      return { isEmailError: true };
    case EMPLOYEE_EMAIL_RESET:
      return { emaildata: undefined, isEmailError: false };

    default:
      return emailListState;
  }
};
