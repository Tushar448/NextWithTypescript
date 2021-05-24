import { DynamicActionTypes } from "../../../../redux/DynamicActionTypes";

type TokenInfoActionTypes = typeof import("./loginaction");
type ForgotPasswordActionTypes = typeof import("./forgotPassword");
export type LoginAction = DynamicActionTypes<
  TokenInfoActionTypes &  ForgotPasswordActionTypes
>;
