import { Reducer } from "redux";

import { AddEmailState } from "../EmployeeState";
import { EmployeeAction } from "../action/types";
import {
    ADD_EMAIL_RESOLVED,
    ADD_EMAIL_REJECTED,
    ADD_EMAIL_RESET
} from "../action/addEmailAction";

const defaultEmailAddState: AddEmailState = {
    isEmailAddError: false
};

export const addEmailReducer: Reducer<AddEmailState, EmployeeAction> = (
  emailAddState = defaultEmailAddState,
  action
) => {
  switch (action.type) {
    case ADD_EMAIL_RESOLVED:
      return { emailAddData: action.payload, isEmailAddError: false };
    case ADD_EMAIL_REJECTED:
      return { isEmailAddError: true };
    case ADD_EMAIL_RESET:
      return { emailAddData: undefined, isEmailAddError: false };

    default:
      return emailAddState;
  }
};
