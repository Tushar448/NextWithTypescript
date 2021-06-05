import { Reducer } from "redux";

import { RegistrationAction } from "../action/types";
import { SignUpState } from "../SignUpState";

import { registrationReducer } from "./registrationReducer";
import { roleReducer } from "./roleReducer";

export const signUpReducer: Reducer<SignUpState, RegistrationAction> = (
  state,
  action
) => {
  return {
    roleState: roleReducer(state && state.roleState, action),
    registrationState: registrationReducer(state && state.registrationState, action)
  };
};
