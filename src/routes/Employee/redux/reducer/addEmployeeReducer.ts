import { Reducer } from "redux";

import { AddEmployeeState } from "../EmployeeState";
import { EmployeeAction } from "../action/types";
import {
    EMPLOYEE_ADD_RESOLVED,
    EMPLOYEE_ADD_REJECTED,
    EMPLOYEE_ADD_RESET
} from "../action/addEmployeeAction";

const defaultEmployeeAddState: AddEmployeeState = {
    isAddEmployeeError: false
};

export const addEmployeeReducer: Reducer<AddEmployeeState, EmployeeAction> = (
  employeeAddState = defaultEmployeeAddState,
  action
) => {
  switch (action.type) {
    case EMPLOYEE_ADD_RESOLVED:
      return { addEmployeeData: action.payload, isAddEmployeeError: false };
    case EMPLOYEE_ADD_REJECTED:
      return { isAddEmployeeError: true };
    case EMPLOYEE_ADD_RESET:
      return { addEmployeeData: undefined, isAddEmployeeError: false };

    default:
      return employeeAddState;
  }
};
