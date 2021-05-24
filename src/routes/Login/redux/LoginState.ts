import { TokenResponse } from "../TokenResponse";
import { ForgotPasswordResult } from "../ForgotPasswordResult";

export interface TokenState {
  hasTokenError: boolean;
  token?: TokenResponse;
}

export interface ForgotPasswordState {
  isForgotPasswordError: boolean;
  forgotPasswordData?: ForgotPasswordResult;
}
export interface LoginState {
  tokenState: TokenState;
  forgotPassword: ForgotPasswordState;
}
