import { Reducer } from "redux";

import { ForgotPasswordState } from "../LoginState";
import { LoginAction } from "../action/type";
import {
  FORGOT_PASSWORD_RESOLVED,
  FORGOT_PASSWORD_REJECTED,
  FORGOT_PASSWORD_RESET
} from "../action/forgotPassword";

const defaultForgotPasswordState: ForgotPasswordState = {
  isForgotPasswordError: false
};

export const forgotPasswordReducer: Reducer<
  ForgotPasswordState,
  LoginAction
> = (forgotPasswordState = defaultForgotPasswordState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_RESOLVED:
      return {
        forgotPasswordData: action.payload,
        isForgotPasswordError: false
      };
    case FORGOT_PASSWORD_REJECTED:
      return { isForgotPasswordError: true };
    case FORGOT_PASSWORD_RESET:
      return { forgotPasswordData: undefined, isForgotPasswordError: false };

    default:
      return forgotPasswordState;
  }
};
