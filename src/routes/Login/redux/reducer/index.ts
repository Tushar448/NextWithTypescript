import { Reducer } from "redux";

import { LoginAction } from "../action/type";
import { LoginState } from "../LoginState";

import { tokenReducer } from "./tokenReducer";
import { forgotPasswordReducer } from "./forgotPasswordReducer";

export const loginReducer: Reducer<LoginState, LoginAction> = (
  state,
  action
) => {
  return {
    tokenState: tokenReducer(state && state.tokenState, action),
    forgotPassword: forgotPasswordReducer(state && state.forgotPassword, action)
  };
};
