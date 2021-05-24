import { ForgotPasswordResult } from "../../ForgotPasswordResult";
import { ForgotPasswordPayload } from "../../ForgotPasswordPayload";

export const FORGOT_PASSWORD = "Login/forgotPassword";
export const FORGOT_PASSWORD_RESOLVED = "Login/forgotPasswordResolved";
export const FORGOT_PASSWORD_REJECTED = "Login/forgotPasswordRejected";
export const FORGOT_PASSWORD_RESET = "Login/forgotPasswordClearData";

export function forgotPasswordActionCreator(params: ForgotPasswordPayload) {
  return {
    type: FORGOT_PASSWORD,
    payload: params
  } as const;
}
forgotPasswordActionCreator.toString = () => FORGOT_PASSWORD;

export type ForgotPasswordActionCreatorType = ReturnType<
  typeof forgotPasswordActionCreator
>;

export function forgotPasswordResolvedActionCreator(
  result: ForgotPasswordResult
) {
  return {
    type: FORGOT_PASSWORD_RESOLVED,
    payload: result
  } as const;
}

export function forgotPasswordActionCreatorRejected(error: boolean) {
  return {
    type: FORGOT_PASSWORD_REJECTED,
    payload: error
  } as const;
}

export function forgotPasswordClearData() {
  return { type: FORGOT_PASSWORD_RESET } as const;
}
