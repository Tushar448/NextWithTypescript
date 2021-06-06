import { Reducer } from "redux";

import { EmployeeListState } from "../EmployeeState";
import { EmployeeAction } from "../action/types";
import {
    EMPLOYEE_INFO_RESOLVED,
    EMPLOYEE_INFO_REJECTED,
    EMPLOYEE_INFO_RESET
} from "../action/employeeListAction";

const defaultEmployeeListState: EmployeeListState = {
    isEmployeeListError: false
};

export const employeeListReducer: Reducer<EmployeeListState, EmployeeAction> = (
  employeeListState = defaultEmployeeListState,
  action
) => {
  switch (action.type) {
    case EMPLOYEE_INFO_RESOLVED:
      return { employeeListData: action.payload, isEmployeeListError: false };
    case EMPLOYEE_INFO_REJECTED:
      return { isEmployeeListError: true };
    case EMPLOYEE_INFO_RESET:
      return { employeeListData: undefined, isEmployeeListError: false };

    default:
      return employeeListState;
  }
};
