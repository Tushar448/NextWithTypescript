import { Reducer } from "redux";

import { EmployeeAction } from "../action/types";
import { EmployeeState } from "../EmployeeState";

import { employeeListReducer } from "./employeeListReducer";
import {addEmployeeReducer} from './addEmployeeReducer';
import {emailReducer} from './emailReducer';

export const employeeReducer: Reducer<EmployeeState, EmployeeAction> = (
  state,
  action
) => {
  return {
    employeeListState: employeeListReducer(state && state.employeeListState, action),
    addEmployeeState: addEmployeeReducer(state && state.addEmployeeState, action),
    emailState: emailReducer(state && state.emailState, action)
  };
};
